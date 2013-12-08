/**
 * @file
 * Integrate Mean Menu library with Responsive Menus module.
 */
(function ($) {
  Drupal.behaviors.responsive_menus_mean_menu = {
    attach: function (context, settings) {
      settings.responsive_menus = settings.responsive_menus || {};
      $.each(settings.responsive_menus, function(ind, iteration){
        if (iteration.responsive_menus_style != 'mean_menu') {
          return true;
        }
        if (!iteration.selectors.length) {
          return;
        }
        // Call meanmenu() with our custom settings.
        $(iteration.selectors).once('responsive-menus-mean-menu', function() {
          $(this).meanmenu({
            meanMenuClose: iteration.close_txt || "X",
            meanMenuCloseSize: iteration.close_size || "18px",
            meanMenuOpen: iteration.trigger_txt || "<span /><span /><span />",
            meanRevealPosition: iteration.position || "right",
            meanScreenWidth: iteration.media_size || "480",
            meanShowChildren: iteration.show_children || true,
            meanExpandableChildren: iteration.expand_children || true,
            meanExpand: iteration.expand_txt || "+",
            meanContract: iteration.contract_txt || "-",
            meanRemoveAttrs: iteration.remove_attrs || true
          });
        });
      });

    }
  };
}(jQuery));
