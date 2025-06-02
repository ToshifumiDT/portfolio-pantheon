(function (Drupal, once) {
  Drupal.behaviors.myThemeBehavior = {
    attach(context, settings) {
      //smooth scroll for anchor links
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

      //parallax effects for stars
      window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        //ensure elements exist before applying styles
        const stars1 = document.getElementById('stars');
        const stars2 = document.getElementById('stars2');
        const stars3 = document.getElementById('stars3');

        if (stars1) stars1.style.transform = `translateY(${scrollY * 0.2}px)`;
        if (stars2) stars2.style.transform = `translateY(${scrollY * 0.1}px)`;
        if (stars3) stars3.style.transform = `translateY(${scrollY * 0.05}px)`;
      });

      console.log("🎉 mytheme JavaScript with parallax loaded!");
    }
  };
})(Drupal, once);
