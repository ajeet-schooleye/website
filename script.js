document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });

  const interactiveEls = document.querySelectorAll(
    'a, button, .skill-card, .project-card, .testi-card'
  );

  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform  = 'translate(-50%,-50%) scale(2.5)';
      cursor.style.background = 'var(--accent2)';
      ring.style.borderColor  = 'rgba(252,108,156,0.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform  = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = 'var(--accent)';
      ring.style.borderColor  = 'rgba(124,108,252,0.5)';
    });
  });

  /* ── SCROLL PROGRESS BAR ── */
  const progressBar = document.getElementById('progress');

  window.addEventListener('scroll', () => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled     = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });

  /* ── NAV SHRINK ON SCROLL ── */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    nav.style.padding = window.scrollY > 60 ? '0.9rem 5%' : '1.4rem 5%';
  });

  /* ── SCROLL REVEAL (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll('.reveal, .timeline-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  /* ── STAGGER TRANSITION DELAYS FOR GRID CARDS ── */
  const staggerSelectors = [
    '.skills-grid .skill-card',
    '.projects-grid .project-card',
    '.testimonials-grid .testi-card',
  ];

  staggerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  });

});