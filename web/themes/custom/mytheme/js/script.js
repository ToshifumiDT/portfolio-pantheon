(function (Drupal, once) {
  Drupal.behaviors.myThemeBehavior = {
    attach(context, settings) {
      once('myThemeExample', 'body', context).forEach(function () {
        console.log('🎉 mytheme JavaScript loaded!');
        document.body.style.borderTop = "5px solid salmon";
      });
    }
  };
})(Drupal, once);
