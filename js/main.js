jQuery(document).ready(function($) {
	$('.info-house_points_item').on('click', function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass('active');
		}else{
			$('.info-house_points .info-house_points_item').removeClass('active');
			$(this).addClass('active');
		}
	});
});