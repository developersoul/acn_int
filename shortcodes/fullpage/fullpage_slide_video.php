<?php

function acn_fullpage_slide_video_sc( $atts, $content ) {
	$at = shortcode_atts([
		"bg_img" => "",
		"bg_img_mobile" => "",
		"bg_color" => "#fff",
		"video_url" => "",
		"uniq_name" => "slide-" . uniqid() . rand(0, 100)
	], $atts);

	$bgUrl = wp_get_attachment_url( $at['bg_img'] );
	ob_start();
	?>

		<div
			class="section section--<?php echo $at['uniq_name'] ?>"
			data-anchor="<?php echo $at['uniq_name'] ?>"
			data-story="2"
			data-index="4"
		>

			<div class="section__content">
				<?php echo do_shortcode($content) ?>
				<button class="section__open section__open-video" style="bottom: 120px"><i class="ion-social-youtube"></i></button>
			</div>

			<div class="section__video" >

				<button class="section__video__close section__open-video">
					<i class="ion-close-round"></i>
				</button>

				<div class="embed-container">
					<iframe data-src="<?php echo $at['video_url'] ?>?autoplay=1" frameborder="0" allowfullscreen ></iframe>
				</div>
			</div>

			<button class="section__down" ><i class="ion-chevron-down"></i></button>

			<div class="section__bg-container">
				<div class="section__bg lazyload" data-bgset="<?php echo $bgUrlMobile ?> [(max-width: 767px)] | <?php echo $bgUrl ?>"></div>
			</div>

		</div>

	<?php
	return ob_get_clean();
}

add_shortcode( 'acn_fullpage_slide_video', 'acn_fullpage_slide_video_sc' );
