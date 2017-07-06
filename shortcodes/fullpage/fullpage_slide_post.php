<?php

function acn_fullpage_slide_post_sc( $atts, $content ) {
	$at = shortcode_atts([
		"title" => "",
		"subtitle" => "",
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
			class="section section--<?php echo $at['uniq_name'] ?>"
			data-anchor="<?php echo $at['uniq_name'] ?>"
			data-story="3"
			data-index="5"
		>
			<div class="section__content">
				<div class="section--center animate-text">
					<div class="padding-sides">
						<h2 class="animate-text" style="text-align: center"><?php echo $at['title'] ?></h2>
						<h3 class="animate-text" style="text-align: center"><?php echo $at['subtitle'] ?></h3>
					</div>
				</div>

				<button class="section__open section__open-post" > <i class="ion-android-open"></i> </button>
			</div>

			<div class="section__post" >
				<?php echo do_shortcode($content) ?>
			</div>

			<div class="section__bg-container">
				<div class="section__bg lazyload" data-bgset="<?php echo $bgUrl ?> 1200w, <?php echo $bgUrlMobile?> 600ws"></div>
			</div>
		</div>

	<?php
	return ob_get_clean();
}

add_shortcode( 'acn_fullpage_slide_post', 'acn_fullpage_slide_post_sc' );
