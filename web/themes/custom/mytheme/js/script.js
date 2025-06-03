(function (Drupal, once) {
  Drupal.behaviors.myThemeBehavior = {
    attach(context, settings) {

      // Smooth scroll for anchor links
      once('myThemeSmoothScroll', 'a[href^="#"]', context).forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href.length > 1 && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              target.setAttribute('tabindex', '-1');
              target.focus();
            }
          }
        });
      });

      //top scroll animation
      const topSection = document.getElementById('Top');
      const topText = document.querySelector('.top-text123');
      const topImg = document.querySelector('.top-img');

      window.addEventListener('scroll', () => {
        if (!topSection || !topText || !topImg) return;

        const scrollY = window.scrollY;
        const triggerPoint = topSection.offsetTop + 100;

        if (scrollY > triggerPoint) {
          topText.style.opacity = '0';
          topText.style.transform = 'translateX(-100px)';
          topImg.style.opacity = '0';
          topImg.style.transform = 'translateX(100px)';
        } else {
          topText.style.opacity = '1';
          topText.style.transform = 'translateX(0)';
          topImg.style.opacity = '1';
          topImg.style.transform = 'translateX(0)';
        }
      });

      console.log("✅ myTheme JavaScript loaded with Top scroll animation.");
    }
  };
})(Drupal, once);
