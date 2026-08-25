document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = '';
  lucide.createIcons();

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    lucide.createIcons();
  });

  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('data-scroll');
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

      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menu');
        lucide.createIcons();
      }
    });
  });

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const firstNameInput = document.getElementById('firstName');
      const lastNameInput = document.getElementById('lastName');
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const equipment = document.getElementById('equipment').value;
      const summary = document.getElementById('summary').value.trim();
      const started = document.getElementById('started').value.trim();

      if (!firstName) {
        firstNameInput.focus();
        return;
      }
      if (!lastName) {
        lastNameInput.focus();
        return;
      }

      const fullName = `${firstName} ${lastName}`.trim();

      const message = [
        'Olá! Gostaria de solicitar atendimento da Voitechrj.',
        `Nome completo: ${fullName}`,
        `Equipamento: ${equipment}`,
        `O que está acontecendo? ${summary}`,
        `Quando começou? ${started || 'Não informado'}`
      ].join('\n');

      // Disparo de Conversão (Lead) para o Google Analytics
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'Conversão',
          event_label: `WhatsApp - ${equipment}`,
          equipment_type: equipment
        });
      }

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/5521994472406?text=${encodedMessage}`, '_blank');
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });

  // FOOTER MOBILE ACCORDION
  const footerAccordions = document.querySelectorAll('.footer-col-accordion');
  footerAccordions.forEach(col => {
    const btn = col.querySelector('.footer-accordion-btn');
    const content = col.querySelector('.footer-accordion-content');
    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      if (window.innerWidth >= 768) return;

      const isActive = col.classList.contains('active');

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

  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const openPrivacyBtns = document.querySelectorAll('[data-modal="privacy"]');
  const openTermsBtns = document.querySelectorAll('[data-modal="terms"]');
  const closeBtns = document.querySelectorAll('.modal-close');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    lucide.createIcons();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openPrivacyBtns.forEach(btn => btn.addEventListener('click', () => openModal(privacyModal)));
  openTermsBtns.forEach(btn => btn.addEventListener('click', () => openModal(termsModal)));
  closeBtns.forEach(btn => btn.addEventListener('click', e => closeModal(e.target.closest('.modal-overlay'))));

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));

  // HERO BANNER CAROUSEL CONTROLLER (5s interval with 4-directional transitions)
  const bannerSlides = document.querySelectorAll('.hero-banner-slide');
  const bannerVisual = document.querySelector('.hero-banner-visual');
  let currentBannerIdx = 0;
  let currentDirIdx = 0;
  let bannerTimer = null;

  // Sequência de transições solicitada:
  // 1. De cima para baixo
  // 2. Da esquerda para a direita
  // 3. De baixo para cima
  // 4. Da direita para a esquerda (e repete do início)
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

  function updateBannerSlide() {
    if (!bannerSlides.length || bannerSlides.length < 2) return;
    const prevIdx = currentBannerIdx;
    currentBannerIdx = (currentBannerIdx + 1) % bannerSlides.length;

    const dir = directions[currentDirIdx];
    currentDirIdx = (currentDirIdx + 1) % directions.length; // 0 -> 1 -> 2 -> 3 -> 0...

    const prevSlide = bannerSlides[prevIdx];
    const nextSlide = bannerSlides[currentBannerIdx];

    // Remove classes anteriores
    prevSlide.classList.remove('active', ...allDirClasses);
    nextSlide.classList.remove('active', ...allDirClasses);

    // Força reflow para reiniciar animação CSS de forma limpa
    void nextSlide.offsetWidth;

    // Aplica a nova direção da animação
    prevSlide.classList.add(dir.outClass);
    nextSlide.classList.add('active', dir.inClass);
  }

  function startBannerAutoPlay() {
    stopBannerAutoPlay();
    if (bannerSlides.length > 1) {
      bannerTimer = setInterval(() => {
        updateBannerSlide();
      }, 5000);
    }
  }

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

  // SERVICES CAROUSEL CONTROLLER (5s interval, 2x2 grid pages, dots & nav buttons, pause on hover)
  const servicesPages = document.querySelectorAll('.services-page');
  const servicesDots = document.querySelectorAll('.services-dot');
  const servicesPrevBtn = document.getElementById('services-prev-btn');
  const servicesNextBtn = document.getElementById('services-next-btn');
  const servicesCarouselWrapper = document.getElementById('services-carousel');
  let currentServicesPage = 0;
  let servicesTimer = null;

  function showServicesPage(pageIndex) {
    if (!servicesPages.length) return;
    currentServicesPage = (pageIndex + servicesPages.length) % servicesPages.length;

    servicesPages.forEach((page, idx) => {
      if (idx === currentServicesPage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    servicesDots.forEach((dot, idx) => {
      if (idx === currentServicesPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    lucide.createIcons();
  }

  function startServicesAutoPlay() {
    stopServicesAutoPlay();
    if (servicesPages.length > 1) {
      servicesTimer = setInterval(() => {
        showServicesPage(currentServicesPage + 1);
      }, 5000);
    }
  }

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

    // SERVICE CARD CLICK -> PREFILL BOOKING FORM
    const serviceCards = document.querySelectorAll('.service-card-clean');
    serviceCards.forEach(card => {
      card.addEventListener('click', (e) => {
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

  // TESTIMONIALS CAROUSEL CONTROLLER (5s interval, 2x2 grid pages, dots & nav buttons, pause on hover)
  const testimonialsPages = document.querySelectorAll('.testimonials-page');
  const testimonialsDots = document.querySelectorAll('.testimonials-dot');
  const testimonialsPrevBtn = document.getElementById('testimonials-prev-btn');
  const testimonialsNextBtn = document.getElementById('testimonials-next-btn');
  const testimonialsCarouselWrapper = document.getElementById('testimonials-carousel');
  let currentTestimonialsPage = 0;
  let testimonialsTimer = null;

  function showTestimonialsPage(pageIndex) {
    if (!testimonialsPages.length) return;
    currentTestimonialsPage = (pageIndex + testimonialsPages.length) % testimonialsPages.length;

    testimonialsPages.forEach((page, idx) => {
      if (idx === currentTestimonialsPage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    testimonialsDots.forEach((dot, idx) => {
      if (idx === currentTestimonialsPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    lucide.createIcons();
  }

  function startTestimonialsAutoPlay() {
    stopTestimonialsAutoPlay();
    if (testimonialsPages.length > 1) {
      testimonialsTimer = setInterval(() => {
        showTestimonialsPage(currentTestimonialsPage + 1);
      }, 5000);
    }
  }

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

  // LIGHTBOX MODAL CONTROLLER
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

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

  // BACK TO TOP CONTROLLER
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    let isScrollTicking = false;
    const checkBackToTop = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollY > 200) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
      isScrollTicking = false;
    };

    const onScroll = () => {
      if (!isScrollTicking) {
        window.requestAnimationFrame(checkBackToTop);
        isScrollTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    checkBackToTop();

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // GOOGLE ANALYTICS EVENT TRACKING (Engajamento e Cliques)
  if (typeof gtag === 'function') {
    // Rastrear cliques nos botões de Solicitar Atendimento (Hero e Menu)
    document.querySelectorAll('.btn-hero-banner-cta, .nav-cta').forEach(btn => {
      btn.addEventListener('click', () => {
        gtag('event', 'cta_click', {
          event_category: 'Engajamento',
          event_label: btn.textContent.trim()
        });
      });
    });

    // Rastrear cliques para redes sociais e avaliações do Google
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
