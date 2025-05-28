(function (Drupal, once) {
  Drupal.behaviors.myThemeBehavior = {
    attach(context, settings) {
      once('myThemeExample', 'body', context).forEach(function () {
        console.log('🎉 mytheme JavaScript loaded!');
        document.body.style.borderTop = "5px solid salmon";

        // smooth scrolling for anchor links
        document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      });
    }
  };
})(Drupal, once);
