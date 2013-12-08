(function($) {

Drupal.behaviors.webform_steps = {};
Drupal.behaviors.webform_steps.attach = function(context, settings) {
  $('.webform-steps-wrapper', context).click(function(event) {
    var $target = $(event.target);
    if ($target.is('span')) {
      var $input = $target.find('input');
      if ($input.is(':enabled')) {
        $input.mousedown();
      };
    }
  }).addClass('webform-steps-clickable').addClass('clickable');
}

})(jQuery);