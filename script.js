document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    menuIcon.setAttribute('data-lucide', mobileNav.classList.contains('active') ? 'x' : 'menu');
    lucide.createIcons();
  });

  document.querySelectorAll('button[data-scroll]').forEach(link => {
    link.addEventListener('click', () => {
      const targetElement = document.getElementById(link.getAttribute('data-scroll'));
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
      if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      }
    });
  });

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const equipment = document.getElementById('equipment').value;
      const summary = document.getElementById('summary').value.trim();
      const started = document.getElementById('started').value.trim();
      const fullName = `${firstName} ${lastName}`.trim();

      const message = [
        'Olá! Gostaria de solicitar atendimento da Voitechrj.',
        `Nome completo: ${fullName}`,
        `Equipamento: ${equipment}`,
        `O que está acontecendo? ${summary}`,
        `Quando começou? ${started || 'Não informado'}`
      ].join('\n');

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
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
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
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { root: null, rootMargin: '0px', threshold: 0.1 });

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
