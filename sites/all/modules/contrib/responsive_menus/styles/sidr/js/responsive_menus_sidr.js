/**
 * @file
 * Integrate Sidr library with Responsive Menus.
 */
(function ($) {
  Drupal.behaviors.responsive_menus_sidr = {
    attach: function (context, settings) {
      settings.responsive_menus = settings.responsive_menus || {};
      var $windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
      $.each(settings.responsive_menus, function(ind, iteration) {
        if (iteration.responsive_menus_style != 'sidr') {
          return true;
        }
        if (!iteration.selectors.length) {
          return;
        }
        // Only apply if window size is correct.
        var $media_size = iteration.media_size || 768;
          // Call Sidr with our settings.
        $(iteration.selectors).once('responsive-menus-sidr', function() {
          $id = 'sidr-' + ind;
          $wrapper_id = 'sidr-wrapper-' + ind;
          $(this).before('<div id="' + $wrapper_id + '"><a id="' + $id + '-button" href="#' + $id + '">' + iteration.trigger_txt + '</a></div>');
          $('#' + $wrapper_id).hide();
          if ($windowWidth < $media_size) {
            $('#' + $wrapper_id).show();
            $(iteration.selectors).hide();
          }
          $('#' + $id + '-button').sidr({
            name: $id || "sidr",
            speed: iteration.speed || 200,
            side: iteration.side || "left",
            source: iteration.selectors || ".main-menu",
            onOpen: function() { iteration.onOpen } || function() {},
            onClose: function() { iteration.onClose } || function() {}
          });
        });
      });

      // Handle window resizing.
      $(window).resize(function() {
        // Window width with legacy browsers.
        $windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
        $.each(settings.responsive_menus, function(ind, iteration) {
          if (iteration.responsive_menus_style != 'sidr') {
            return true;
          }
          if (!iteration.selectors.length) {
            return;
          }
          $media_size = iteration.media_size || 768;
          if ($windowWidth < $media_size) {
            $('#' + $wrapper_id).show();
            $(iteration.selectors).hide();
          }
          else {
            $('#' + $wrapper_id).hide();
            $(iteration.selectors).show();
          }
        });
      });

    }
  };
}(jQuery));
