

var num_slide = 0; 

jQuery(document).ready(function($) {
	$('.info-house_points_item').on('click', function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass('active');
		}else{
			$('.info-house_points .info-house_points_item').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.gallery-block_head_slider_next').on('click', function() {
		if (num_slide < 2) {
			num_slide += 1;
			mg_line = (num_slide * 100) * -1;
			$('.gallery-block_slider_line').css('transform', 'translateX('+mg_line+'%)');
			
			$('.gallery-block_head_slider_number_item.number_page').text(num_slide + 1);
		}
	});

	$('.gallery-block_head_slider_prev').on('click', function() {
		if (num_slide > 0) {
			num_slide -= 1;
			mg_line = (num_slide * 100) * -1;
			$('.gallery-block_slider_line').css('transform', 'translateX('+mg_line+'%)');
			
			$('.gallery-block_head_slider_number_item.number_page').text(num_slide + 1);
		}
	});
});