<?php

function bs_donate_inline_section_sc($atts, $content = null) {
	$at = shortcode_atts([
		"donate_monthly_redirect" => get_option('donate_monthly_redirect'),
		"donate_once_redirect" => get_option('donate_once_redirect'),
		"country" => getCountry(),
		"other" => gett("Other"),
		"monthly" => gett("Monthly"),
		"once" => gett("Once"),
		"donate" => gett("Donate"),
		"next" => gett("Next"),
		"back" => gett("Back"),
    "yes" => gett("Yes"),
    "no" => gett("No"),
		"placeholder_amount" => gett("Amount"),
    "placeholder_credit_card" => gett("Credit Card Number"),
    "placeholder_month" => gett("MM"),
    "placeholder_year" => gett("YY"),
    "placeholder_cvc" => gett("CVC"),
    "explain_cvc" => gett("The last 3 digits displayed on the back of your credit card."),
    "placeholder_name" => gett("Name"),
    "placeholder_email" => gett("Email"),
    "placeholder_country" => gett("Country"),
		"validation_declined" => gett("Your transaction was not accepted, try again"),
    "validation_card" => gett("Incorrect card"),
    "validation_month" => gett("Incorrect month"),
    "validation_year" => gett("Incorrect year"),
    "validation_cvc" => gett("Incorrect cvc"),
    "validation_name" => gett("Incorrect name"),
    "validation_email" => gett("Incorrect email"),
    "validation_country" => gett("Incorrect country"),
		"template_uri" => str_replace("http:", "", get_template_directory_uri()),
    "title" => gett("SUPPORT A PERSECUTED CHRISTIAN"),
    "subtitle" => gett("My gift to support the ACN"),
    "success_title" => gett("TU DONACIÓN SE HA REALIZADO CON ÉXITO"),
    "success_subtitle" => gett("¡GRACIAS POR TU GENEROSIDAD!"),
    "text_four_step" => gett("ACN tiene un mayor impacto cuándo cuenta con la estabilidad proporcionada por la generosidad de sus benefactores."),
    "subtext_four_step" => gett("Podrías ayudarnos con un pequeño valor diario de:"),
    "is_blue" => false,
		"tags" => ""
	 ], $atts);

	$getLang = function_exists("pll_current_language") ? pll_current_language("name") : "";

	$props = [
	 "texts" => $at,
	 "countries" => function_exists('getCountries') ? getCountries() : [],
	 "is_blue" => $at['is_blue'],
	 "redirect" => [
		 "monthly" => $at['donate_monthly_redirect'],
		 "once" => $at['donate_once_redirect']
	 ],
	 "tags" => !empty($getLang) ? strtoupper($getLang) . ',' : '' . $at['tags'],
	 "titles" => ["SUPPORT A PERSECUTED CHRISTIAN", "THANK YOU"],
	 "content" =>  $content,
 	];

	ob_start();
?>

<div
	class="bs-donate-inline-section"
	data-props='<?php echo json_encode($props) ?>'
>
</div>

<?php
return ob_get_clean();
}

add_shortcode('bs_donate_inline_section', 'bs_donate_inline_section_sc');
