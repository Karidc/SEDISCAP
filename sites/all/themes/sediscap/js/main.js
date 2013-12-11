(function($) {
	Drupal.behaviors.oeaMainJs = {
    	attach: function(context, settings) {
			$('#fs-minus').click(function(){
				var currentSize = $('body').css('fontSize').replace('px', '');
				if(currentSize>=13){
					currentSize--;
					$('body').css('fontSize',currentSize);					
				}
			});
			$('#fs-plus').click(function(){
				var currentSize = $('body').css('fontSize').replace('px', '');
				if(currentSize<=22){
					currentSize++;
					$('body').css('fontSize',currentSize);
				}
			});

		}
    };
})(jQuery);
