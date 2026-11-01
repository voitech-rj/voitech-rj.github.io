// =================================================================
// MÓDULO: Orquestrador de Interatividade e Comportamento da Interface
// Objetivo: Centralizar a inicialização de componentes visuais, 
//           gerenciar estados de carrosséis, acessibilidade (A11y),
//           modais, navegação suave e despacho de eventos de telemetria.
// Dependências: Lucide Icons (global window.lucide), Google Tag (gtag)
// Ambiente: Navegadores Web modernos (DOM Level 3 / ES6+)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------------
  // 1. INICIALIZAÇÃO DE ESTADO GLOBAL E ATIVOS VISUAIS
  // ---------------------------------------------------------------
  // Restaura o fluxo de rolagem do body caso tenha sido travado por modal prévio
  // e inicializa os ícones SVG vetoriais providos pela biblioteca Lucide.
  // Nota didática: 'lucide.createIcons()' escaneia nós com o atributo
  // 'data-lucide' e substitui por elementos <svg>, exigindo reexecução
  // sempre que nós forem adicionados dinamicamente ou tiverem atributos alterados.
  document.body.style.overflow = '';
  lucide.createIcons();

  // ---------------------------------------------------------------
  // 2. CONTROLE DO MENU RESPONSIVO (DRAWER MOBILE)
  // ---------------------------------------------------------------
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');

  if (menuBtn && mobileNav && menuIcon) {
    menuBtn.addEventListener('click', () => {
      // Alterna a classe de visibilidade e obtém o estado booleano resultante
      const isOpen = mobileNav.classList.toggle('active');

      // Sincroniza ícones e atributos de acessibilidade (WAI-ARIA)
      // Nota didática: Manter 'aria-expanded' sincronizado garante que leitores
      // de tela informem instantaneamente ao usuário com deficiência visual
      // se o menu colapsável está aberto ou fechado.
      menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      lucide.createIcons();
    });
  }

  // ---------------------------------------------------------------
  // 3. NAVEGAÇÃO INTERNA COM ROLAGEM SUAVE (SMOOTH SCROLLING)
  // ---------------------------------------------------------------
  // Intercepta âncoras com 'data-scroll' para proporcionar rolagem com interpolação
  // visual fluida e fechar automaticamente o menu mobile após a seleção.
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('data-scroll');

      // Caso especial para retorno ao topo (hero banner)
      if (targetId === 'hero') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Recolhe o menu mobile se estiver aberto após o clique no link
      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menu');
        lucide.createIcons();
      }
    });
  });

  // ---------------------------------------------------------------
  // 4. FORMULÁRIO DE CAPTAÇÃO DE LEADS E REDIRECIONAMENTO WHATSAPP
  // ---------------------------------------------------------------
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Coleta e higienização dos campos de entrada
      const firstNameInput = document.getElementById('firstName');
      const lastNameInput = document.getElementById('lastName');
      const firstName = firstNameInput ? firstNameInput.value.trim() : '';
      const lastName = lastNameInput ? lastNameInput.value.trim() : '';
      const equipment = document.getElementById('equipment') ? document.getElementById('equipment').value : '';
      const summary = document.getElementById('summary') ? document.getElementById('summary').value.trim() : '';
      const started = document.getElementById('started') ? document.getElementById('started').value.trim() : '';

      // Validação defensiva com foco imediato no primeiro campo inválido
      // Nota didática: Guiar o foco via elemento.focus() reduz a taxa de abandono (drop-off)
      // ao indicar claramente qual dado obrigatório impediu o envio.
      if (!firstName && firstNameInput) {
        firstNameInput.focus();
        return;
      }
      if (!lastName && lastNameInput) {
        lastNameInput.focus();
        return;
      }

      const fullName = `${firstName} ${lastName}`.trim();

      // Montagem do payload textual da mensagem
      const message = [
        'Olá! Gostaria de solicitar atendimento da Voitechrj.',
        `Nome completo: ${fullName}`,
        `Equipamento: ${equipment}`,
        `O que está acontecendo? ${summary}`,
        `Quando começou? ${started || 'Não informado'}`
      ].join('\n');

      // Disparo de evento de conversão primária para o Google Analytics 4
      // Nota didática: Verificamos o typeof da função global 'gtag' para prevenir
      // exceções de ReferenceError em ambientes com bloqueadores de anúncio (AdBlock).
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'Conversão',
          event_label: `WhatsApp - ${equipment}`,
          equipment_type: equipment
        });
      }

      // Codificação URI para garantir integridade de acentos e quebras de linha
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/5521994472406?text=${encodedMessage}`, '_blank');
    });
  }

  // ---------------------------------------------------------------
  // 5. ACORDEÃO DE PERGUNTAS FREQUENTES (FAQ ACCORDION)
  // ---------------------------------------------------------------
  // Implementa comportamento de acordeão exclusivo: apenas um item aberto por vez.
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os nós irmãos para evitar sobrecarga cognitiva visual
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Se o item clicado não estava ativo, abre e calcula a altura dinâmica real
      // Nota didática: O uso de 'scrollHeight' permite transicionar de altura 0 até
      // o tamanho dinâmico exato do conteúdo via CSS transition, superando a
      // limitação de animar a propriedade 'height: auto'.
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });

  // ---------------------------------------------------------------
  // 6. ACORDEÃO MOBILE DO RODAPÉ (FOOTER ACCORDION)
  // ---------------------------------------------------------------
  // Transforma as colunas do rodapé em gavetas expansíveis em telas < 768px.
  const footerAccordions = document.querySelectorAll('.footer-col-accordion');
  footerAccordions.forEach(col => {
    const btn = col.querySelector('.footer-accordion-btn');
    const content = col.querySelector('.footer-accordion-content');
    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      // Desativa o comportamento de clique quando a tela está em resolução desktop
      if (window.innerWidth >= 768) return;

      const isActive = col.classList.contains('active');

      // Fecha as demais colunas do rodapé
      footerAccordions.forEach(otherCol => {
        if (otherCol !== col) {
          otherCol.classList.remove('active');
          const otherBtn = otherCol.querySelector('.footer-accordion-btn');
          const otherContent = otherCol.querySelector('.footer-accordion-content');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (!isActive) {
        col.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight + 40}px`;
      } else {
        col.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });

  // Reseta estados do rodapé ao redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      footerAccordions.forEach(col => {
        col.classList.remove('active');
        const btn = col.querySelector('.footer-accordion-btn');
        const content = col.querySelector('.footer-accordion-content');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (content) content.style.maxHeight = null;
      });
    }
  });

  // ---------------------------------------------------------------
  // 7. SISTEMA DE DIÁLOGOS MODAIS (TERMOS & PRIVACIDADE)
  // ---------------------------------------------------------------
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const openPrivacyBtns = document.querySelectorAll('[data-modal="privacy"]');
  const openTermsBtns = document.querySelectorAll('[data-modal="terms"]');
  const closeBtns = document.querySelectorAll('.modal-close');

  // =================================================================
  // FUNÇÃO: openModal
  // Objetivo: Exibir a janela modal, travar o scroll da página e posicionar foco
  // Entrada: modal (HTMLElement) - Nó DOM correspondente ao container do modal
  // Retorno: void
  // =================================================================
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    // Previne a rolagem da página de fundo (scroll locking)
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    lucide.createIcons();
  }

  // =================================================================
  // FUNÇÃO: closeModal
  // Objetivo: Ocultar o modal ativo e restabelecer a rolagem natural da página
  // Entrada: modal (HTMLElement) - Nó DOM do modal a ser encerrado
  // Retorno: void
  // =================================================================
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Vinculação de gatilhos de abertura e fechamento
  openPrivacyBtns.forEach(btn => btn.addEventListener('click', () => openModal(privacyModal)));
  openTermsBtns.forEach(btn => btn.addEventListener('click', () => openModal(termsModal)));
  closeBtns.forEach(btn => btn.addEventListener('click', e => closeModal(e.target.closest('.modal-overlay'))));

  // Fechamento ao clicar fora da caixa de conteúdo (backdrop)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Fechamento via tecla universal Escape (acessibilidade teclado)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
    }
  });

  // ---------------------------------------------------------------
  // 8. OBSERVADOR DE ENTRADA NA TELA (INTERSECTION OBSERVER - REVEAL)
  // ---------------------------------------------------------------
  // Aplica classes de transição conforme os elementos entram na viewport do usuário.
  // Nota didática: O IntersectionObserver opera de maneira assíncrona fora da thread
  // principal de renderização, evitando o gargalo de desempenho (layout thrashing)
  // que ocorreria ao ouvir o evento 'scroll' diretamente com 'getBoundingClientRect'.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Deixa de observar após a primeira animação
      }
    });
  }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));

  // ---------------------------------------------------------------
  // 9. CARROSSEL DO BANNER HERO (TRANSIÇÃO QUADRIDIRECIONAL CÍCLICA)
  // ---------------------------------------------------------------
  const bannerSlides = document.querySelectorAll('.hero-banner-slide');
  const bannerVisual = document.querySelector('.hero-banner-visual');
  let currentBannerIdx = 0;
  let currentDirIdx = 0;
  let bannerTimer = null;

  // Sequência cíclica de 4 direções pré-estabelecida:
  // 1. De cima para baixo
  // 2. Da esquerda para a direita
  // 3. De baixo para cima
  // 4. Da direita para a esquerda
  const directions = [
    { inClass: 'slide-in-down', outClass: 'slide-out-down' },
    { inClass: 'slide-in-right', outClass: 'slide-out-right' },
    { inClass: 'slide-in-up', outClass: 'slide-out-up' },
    { inClass: 'slide-in-left', outClass: 'slide-out-left' }
  ];

  const allDirClasses = [
    'slide-in-down', 'slide-out-down',
    'slide-in-right', 'slide-out-right',
    'slide-in-up', 'slide-out-up',
    'slide-in-left', 'slide-out-left'
  ];

  // =================================================================
  // FUNÇÃO: updateBannerSlide
  // Objetivo: Alternar para o próximo slide aplicando animação direcional
  // Entrada: Nenhuma (opera sobre variáveis de escopo léxico)
  // Retorno: void
  // =================================================================
  function updateBannerSlide() {
    if (!bannerSlides.length || bannerSlides.length < 2) return;
    const prevIdx = currentBannerIdx;
    currentBannerIdx = (currentBannerIdx + 1) % bannerSlides.length;

    const dir = directions[currentDirIdx];
    currentDirIdx = (currentDirIdx + 1) % directions.length;

    const prevSlide = bannerSlides[prevIdx];
    const nextSlide = bannerSlides[currentBannerIdx];

    // Remove classes de transições prévias
    prevSlide.classList.remove('active', ...allDirClasses);
    nextSlide.classList.remove('active', ...allDirClasses);

    // Nota didática: A leitura de 'offsetWidth' força intencionalmente um reflow
    // síncrono no motor do browser, permitindo reiniciar transições CSS
    // no mesmo ciclo de execução sem race condition visual.
    void nextSlide.offsetWidth;

    // Aplica a nova direção da animação
    prevSlide.classList.add(dir.outClass);
    nextSlide.classList.add('active', dir.inClass);
  }

  // =================================================================
  // FUNÇÃO: startBannerAutoPlay
  // Objetivo: Iniciar o temporizador cíclico de 5 segundos do hero banner
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function startBannerAutoPlay() {
    stopBannerAutoPlay();
    if (bannerSlides.length > 1) {
      bannerTimer = setInterval(() => {
        updateBannerSlide();
      }, 5000);
    }
  }

  // =================================================================
  // FUNÇÃO: stopBannerAutoPlay
  // Objetivo: Pausar o ciclo de autoplay do hero banner (ex: ao passar o mouse)
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function stopBannerAutoPlay() {
    if (bannerTimer) {
      clearInterval(bannerTimer);
      bannerTimer = null;
    }
  }

  startBannerAutoPlay();

  if (bannerVisual) {
    bannerVisual.addEventListener('mouseenter', stopBannerAutoPlay);
    bannerVisual.addEventListener('mouseleave', startBannerAutoPlay);
  }

  // ---------------------------------------------------------------
  // 10. CARROSSEL DE SERVIÇOS (PAGINAÇÃO GRID 2x2 & CONTROLES)
  // ---------------------------------------------------------------
  const servicesPages = document.querySelectorAll('.services-page');
  const servicesDots = document.querySelectorAll('.services-dot');
  const servicesPrevBtn = document.getElementById('services-prev-btn');
  const servicesNextBtn = document.getElementById('services-next-btn');
  const servicesCarouselWrapper = document.getElementById('services-carousel');
  let currentServicesPage = 0;
  let servicesTimer = null;

  // =================================================================
  // FUNÇÃO: showServicesPage
  // Objetivo: Ativar a página correspondente do catálogo de serviços
  // Entrada: pageIndex (number) - Índice numérico pretendido (com suporte a overflow)
  // Retorno: void
  // =================================================================
  function showServicesPage(pageIndex) {
    if (!servicesPages.length) return;
    // Nota didática: A operação modular '(index + length) % length' garante
    // que números negativos ou superiores ao limite façam o wrap-around cíclico perfeito.
    currentServicesPage = (pageIndex + servicesPages.length) % servicesPages.length;

    servicesPages.forEach((page, idx) => {
      page.classList.toggle('active', idx === currentServicesPage);
    });

    servicesDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentServicesPage);
    });

    lucide.createIcons();
  }

  // =================================================================
  // FUNÇÃO: startServicesAutoPlay
  // Objetivo: Iniciar a rotação automática das páginas de serviços a cada 5s
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function startServicesAutoPlay() {
    stopServicesAutoPlay();
    if (servicesPages.length > 1) {
      servicesTimer = setInterval(() => {
        showServicesPage(currentServicesPage + 1);
      }, 5000);
    }
  }

  // =================================================================
  // FUNÇÃO: stopServicesAutoPlay
  // Objetivo: Interromper a rotação automática dos serviços
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function stopServicesAutoPlay() {
    if (servicesTimer) {
      clearInterval(servicesTimer);
      servicesTimer = null;
    }
  }

  if (servicesPages.length > 0) {
    startServicesAutoPlay();

    if (servicesPrevBtn) {
      servicesPrevBtn.addEventListener('click', () => {
        showServicesPage(currentServicesPage - 1);
        startServicesAutoPlay();
      });
    }

    if (servicesNextBtn) {
      servicesNextBtn.addEventListener('click', () => {
        showServicesPage(currentServicesPage + 1);
        startServicesAutoPlay();
      });
    }

    servicesDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const pageIdx = parseInt(dot.getAttribute('data-page'), 10);
        if (!isNaN(pageIdx)) {
          showServicesPage(pageIdx);
          startServicesAutoPlay();
        }
      });
    });

    if (servicesCarouselWrapper) {
      servicesCarouselWrapper.addEventListener('mouseenter', stopServicesAutoPlay);
      servicesCarouselWrapper.addEventListener('mouseleave', startServicesAutoPlay);
    }

    // -------------------------------------------------------------
    // PRÉ-PREENCHIMENTO DO FORMULÁRIO VIA CARDS DE SERVIÇO
    // -------------------------------------------------------------
    // Ao clicar em um serviço, preenche os campos do formulário e faz scroll suave
    const serviceCards = document.querySelectorAll('.service-card-clean');
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        const serviceName = card.getAttribute('data-service');
        const equipment = card.getAttribute('data-equipment');
        const summaryTextarea = document.getElementById('summary');
        const equipmentSelect = document.getElementById('equipment');
        const bookingSection = document.getElementById('booking');

        if (serviceName && summaryTextarea) {
          summaryTextarea.value = `Olá! Gostaria de solicitar o serviço de ${serviceName}.`;
        }

        if (equipment && equipmentSelect) {
          equipmentSelect.value = equipment;
        }

        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (summaryTextarea) {
              summaryTextarea.focus();
              summaryTextarea.classList.add('highlight-field');
              setTimeout(() => {
                summaryTextarea.classList.remove('highlight-field');
              }, 2000);
            }
          }, 600);
        }
      });
    });
  }

  // ---------------------------------------------------------------
  // 11. CARROSSEL DE AVALIAÇÕES E DEPOIMENTOS DE CLIENTES
  // ---------------------------------------------------------------
  const testimonialsPages = document.querySelectorAll('.testimonials-page');
  const testimonialsDots = document.querySelectorAll('.testimonials-dot');
  const testimonialsPrevBtn = document.getElementById('testimonials-prev-btn');
  const testimonialsNextBtn = document.getElementById('testimonials-next-btn');
  const testimonialsCarouselWrapper = document.getElementById('testimonials-carousel');
  let currentTestimonialsPage = 0;
  let testimonialsTimer = null;

  // =================================================================
  // FUNÇÃO: showTestimonialsPage
  // Objetivo: Atualizar o slide visível de depoimentos e sincronizar paginação
  // Entrada: pageIndex (number) - Posição de página desejada
  // Retorno: void
  // =================================================================
  function showTestimonialsPage(pageIndex) {
    if (!testimonialsPages.length) return;
    currentTestimonialsPage = (pageIndex + testimonialsPages.length) % testimonialsPages.length;

    testimonialsPages.forEach((page, idx) => {
      page.classList.toggle('active', idx === currentTestimonialsPage);
    });

    testimonialsDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentTestimonialsPage);
    });

    lucide.createIcons();
  }

  // =================================================================
  // FUNÇÃO: startTestimonialsAutoPlay
  // Objetivo: Rotação periódica automática de depoimentos a cada 5 segundos
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function startTestimonialsAutoPlay() {
    stopTestimonialsAutoPlay();
    if (testimonialsPages.length > 1) {
      testimonialsTimer = setInterval(() => {
        showTestimonialsPage(currentTestimonialsPage + 1);
      }, 5000);
    }
  }

  // =================================================================
  // FUNÇÃO: stopTestimonialsAutoPlay
  // Objetivo: Parar o temporizador de rotação de depoimentos
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function stopTestimonialsAutoPlay() {
    if (testimonialsTimer) {
      clearInterval(testimonialsTimer);
      testimonialsTimer = null;
    }
  }

  if (testimonialsPages.length > 0) {
    startTestimonialsAutoPlay();

    if (testimonialsPrevBtn) {
      testimonialsPrevBtn.addEventListener('click', () => {
        showTestimonialsPage(currentTestimonialsPage - 1);
        startTestimonialsAutoPlay();
      });
    }

    if (testimonialsNextBtn) {
      testimonialsNextBtn.addEventListener('click', () => {
        showTestimonialsPage(currentTestimonialsPage + 1);
        startTestimonialsAutoPlay();
      });
    }

    testimonialsDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const pageIdx = parseInt(dot.getAttribute('data-page'), 10);
        if (!isNaN(pageIdx)) {
          showTestimonialsPage(pageIdx);
          startTestimonialsAutoPlay();
        }
      });
    });

    if (testimonialsCarouselWrapper) {
      testimonialsCarouselWrapper.addEventListener('mouseenter', stopTestimonialsAutoPlay);
      testimonialsCarouselWrapper.addEventListener('mouseleave', startTestimonialsAutoPlay);
    }
  }

  // ---------------------------------------------------------------
  // 12. CONTROLADOR DO MODAL LIGHTBOX DE IMAGENS
  // ---------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

  // =================================================================
  // FUNÇÃO: closeLightboxModal
  // Objetivo: Fechar a visualização expandida de fotos da galeria
  // Entrada: Nenhuma
  // Retorno: void
  // =================================================================
  function closeLightboxModal() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightboxModal);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightboxModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightboxModal();
    }
  });

  // ---------------------------------------------------------------
  // 13. BOTÃO VOLTAR AO TOPO COM DEBOUNCING VIA REQUESTANIMATIONFRAME
  // ---------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    let isScrollTicking = false;

    // =================================================================
    // FUNÇÃO: checkBackToTop
    // Objetivo: Avaliar o deslocamento vertical e exibir/ocultar o botão
    // Entrada: Nenhuma
    // Retorno: void
    // =================================================================
    const checkBackToTop = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      backToTopBtn.classList.toggle('visible', scrollY > 200);
      isScrollTicking = false;
    };

    // =================================================================
    // FUNÇÃO: onScroll
    // Objetivo: Escalonar a checagem no próximo frame de renderização do display
    // Entrada: Nenhuma
    // Retorno: void
    // =================================================================
    // Nota didática: 'window.requestAnimationFrame' garante que a leitura de
    // scrollTop só ocorra uma única vez por quadro de exibição (60Hz/120Hz),
    // eliminando engasgos (jank) no processo de scroll.
    const onScroll = () => {
      if (!isScrollTicking) {
        window.requestAnimationFrame(checkBackToTop);
        isScrollTicking = true;
      }
    };

    // Nota didática: O modificador '{ passive: true }' instrui o motor do
    // browser a nunca chamar 'preventDefault()', permitindo scroll suave e fluido.
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    checkBackToTop();

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------------------------------------------------------------
  // 14. TELEMETRIA E TELEMEDIÇÃO DE EVENTOS (GOOGLE ANALYTICS 4)
  // ---------------------------------------------------------------
  if (typeof gtag === 'function') {
    // Rastreia cliques nos botões de Chamada para Ação (CTAs principais)
    document.querySelectorAll('.btn-hero-banner-cta, .nav-cta').forEach(btn => {
      btn.addEventListener('click', () => {
        gtag('event', 'cta_click', {
          event_category: 'Engajamento',
          event_label: btn.textContent.trim()
        });
      });
    });

    // Rastreia saídas para links externos (redes sociais e avaliações Google)
    document.querySelectorAll('.footer-social-btn, .btn-google-reviews').forEach(link => {
      link.addEventListener('click', () => {
        gtag('event', 'outbound_click', {
          event_category: 'Links Externos',
          event_label: link.getAttribute('href') || link.getAttribute('aria-label')
        });
      });
    });
  }
});
