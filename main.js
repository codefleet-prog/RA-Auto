document.addEventListener('DOMContentLoaded', () => {
  // Sticky header behavior
  const header = document.getElementById('fixed-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-title, .section-subtitle, .card, .features-list li, .split-image, .gallery-item, .about-text, .about-visual, .stat-item, .info-box, .contact-details, .footer-form, .social-links').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // Hero background slider
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;
  
  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // Mobile Menu
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileToggles = document.querySelectorAll('.mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  if (mobileMenu) {
    mobileToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });

    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
  }
});
