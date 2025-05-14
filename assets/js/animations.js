// Page loader
document.addEventListener('DOMContentLoaded', function() {
  // Add loader HTML
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.prepend(loader);
  
  // Hide loader after page loads
  window.addEventListener('load', function() {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 1000);
  });
});

// Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Animate elements on scroll
function animateOnScroll() {
  const animateElements = document.querySelectorAll('.showcase, .service-item, .blog-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
  lazyLoadImages();
  animateOnScroll();
});

// Add stagger animation to elements
function staggerAnimation() {
  const showcases = document.querySelectorAll('.showcase');
  showcases.forEach((showcase, index) => {
    showcase.style.animationDelay = `${index * 0.1}s`;
  });
}

// Cart bounce animation
function animateCartAdd() {
  const cartButtons = document.querySelectorAll('.action-btn[data-cart], .add-cart-btn');
  cartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cart = document.querySelector('.header-user-actions .action-btn:last-child');
      cart.style.animation = 'bounce 0.6s ease';
      setTimeout(() => {
        cart.style.animation = '';
      }, 600);
    });
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
  staggerAnimation();
  animateCartAdd();
}); 