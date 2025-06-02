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

      console.log("✅ myTheme JavaScript loaded.");
    }
  };
})(Drupal, once);
