<?php

function acn_fullpage_slide_sc( $atts, $content ) {
	$at = shortcode_atts([
		"bg_img" => "",
		"bg_img_mobile" => "",
		"bg_color" => "#fff",
		"uniq_name" => "slide-" . uniqid() . rand(0, 100) 
	], $atts);
	
	$bgUrl = wp_get_attachment_url( $at['bg_img'] ); 
	$bgUrlMobile = wp_get_attachment_url( $at['bg_img_mobile'] ); 

	ob_start();
	?>
		<div
			data-anchor="<?php echo $at['uniq_name'] ?>"
			class="section section--<?php echo $at['uniq_name'] ?> lazyload" 
			data-src="<?php echo $bgUrl ?>"
			data-bgset="<?php echo $bgUrl ?> 1200w, <?php echo $bgUrlMobile ?> 750w"
			style="background-size: cover; background-position: center center"
		>
			<div class="section__content">
				<?php echo do_shortcode($content) ?>
			</div>
		</div>
		
	<?php
	return ob_get_clean();
}

add_shortcode( 'acn_fullpage_slide', 'acn_fullpage_slide_sc' );