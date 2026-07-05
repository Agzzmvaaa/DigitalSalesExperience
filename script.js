// ========================================
// Скрипты для лендинга «¡Buen viaje в Мадрид!»
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const navOverlay = document.getElementById('navOverlay');
  const navClose = document.getElementById('navClose');
  const header = document.getElementById('header');

  // ----------------------------------------
  // 1. Бургер-меню (боковая панель)
  // ----------------------------------------
  const closeMenu = () => {
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--open');
    navOverlay.classList.remove('nav-overlay--visible');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
  };

  const openMenu = () => {
    burger.classList.add('burger--active');
    nav.classList.add('nav--open');
    navOverlay.classList.add('nav-overlay--visible');
    navOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
  };

  burger.addEventListener('click', () => {
    if (nav.classList.contains('nav--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navClose.addEventListener('click', closeMenu);
  navOverlay.addEventListener('click', closeMenu);

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      closeMenu();
      const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      closeMenu();
    }
  });

  // ----------------------------------------
  // 3. Шапка при скролле
  // ----------------------------------------
  const handleScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ----------------------------------------
  // 4. Аккордеон
  // ----------------------------------------
  const accordionItems = document.querySelectorAll('.accordion__item');

  const setAccordionHeight = (item, open) => {
    const content = item.querySelector('.accordion__content');
    const trigger = item.querySelector('.accordion__trigger');

    if (open) {
      item.classList.add('accordion__item--active');
      content.style.maxHeight = `${content.scrollHeight}px`;
      trigger.setAttribute('aria-expanded', 'true');
    } else {
      item.classList.remove('accordion__item--active');
      content.style.maxHeight = null;
      trigger.setAttribute('aria-expanded', 'false');
    }
  };

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const contentId = content => content.id || `accordion-${Math.random().toString(36).slice(2, 9)}`;

    const panel = item.querySelector('.accordion__content');
    if (!panel.id) {
      panel.id = contentId(panel);
    }
    trigger.setAttribute('aria-controls', panel.id);

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('accordion__item--active');

      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          setAccordionHeight(otherItem, false);
        }
      });

      setAccordionHeight(item, !isActive);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && nav.classList.contains('nav--open')) {
      closeMenu();
    }

    document.querySelectorAll('.accordion__item--active').forEach(item => {
      const content = item.querySelector('.accordion__content');
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  });

  // ----------------------------------------
  // 5. Появление секций при скролле
  // ----------------------------------------
  const sections = document.querySelectorAll('.section');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));

  // ----------------------------------------
  // 6. Подсветка активной ссылки в шапке
  // ----------------------------------------
  const navLinks = document.querySelectorAll('.nav__link');
  const navSections = Array.from(navLinks)
    .map(link => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  const setActiveNav = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${id}`);
    });
  };

  if (navSections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) {
        setActiveNav(visible[0].target.id);
      }
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: [0, 0.15, 0.35, 0.55]
    });

    navSections.forEach(section => navObserver.observe(section));
    setActiveNav(navSections[0].id);
  }

  // ----------------------------------------
  // 7. Параллакс декораций hero
  // ----------------------------------------
  const decorElements = document.querySelectorAll('.hero__decor');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && decorElements.length) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      decorElements.forEach((decor, index) => {
        const speed = index === 0 ? 0.15 : index === 1 ? 0.1 : 0.2;
        decor.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });
  }

});
