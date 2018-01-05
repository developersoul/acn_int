<?php

function bs_donate_container_sc($atts, $content = null) {

	 $at = shortcode_atts([
		 "donate_monthly_redirect" => get_option('donate_monthly_redirect'),
		 "donate_once_redirect" => get_option('donate_once_redirect'),
		 "country" => getCountry(),
		 "city" => getCity(),
		 "other" => gett("Other"),
		 "phone" => gett("Phone"),
		 "monthly" => gett("Monthly"),
		 "once" => gett("Once"),
		 "donate" => gett("Donate"),
		 "next" => gett("Next"),
		 "back" => gett("Back"),
     "yes" => gett("Yes"),
    "no" => gett("Not now"),
		 "placeholder_amount" => gett("Amount"),
    "placeholder_credit_card" => gett("Credit Card Number"),
    "placeholder_month" => gett("MM"),
    "placeholder_year" => gett("YY"),
	"placeholder_cvc" => gett("CVC"),
	'placeholder_phone' => 'phone',
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
	"validation_phone" => gett("Incorrect phone"),
    "step_amount_text" => gett("Select Gift Amount"),
    "step_payment_text" => gett("Payment Details"),
    "step_contact_text" => gett("Your Information"),
	"template_uri" => str_replace("http:", "", get_template_directory_uri()),
    "title" => gett("SUPPORT A PERSECUTED CHRISTIAN"),
    "subtitle" => gett("My gift to support the ACN"),
    "success_title" => gett("YOUR DONATION WAS SUCCESSFUL"),
    "success_subtitle" => gett("THANK YOU FOR YOUR GENEROSITY!."),
    "text_four_step" => gett("ACN has a bigger impact when due to the generosity of benefactors can count on an stable budget."),
    "subtext_four_step" => gett("Could you help us with a small daily donation in the amount of US$"),
    "text_footer" => gett("Your donation will be charged to your credit card. You can cancel your contribution anytime you want."),
	"is_blue" => false,
	"call_center" => get_option('call_center'),
		"preload" => get_template_directory_uri() . "/public/img/spinner.svg",
		"tags" => ""
	 ], $atts);


	 	$getLang = getLangTag();

	 $props = [
 		"texts" => $at,
		"countries" => function_exists('getCountries') ? getCountries() : [],
		"prefixes" =>  function_exists('country_code') ? country_code() : [],
	    "is_blue" => $at['is_blue'],
		"call_center" => $at['call_center'], 
 		"redirect" => [
 			"monthly" => $at['donate_monthly_redirect'],
 			"once" => $at['donate_once_redirect']
 		],
 		"tags" => !empty($getLang) ? strtoupper($getLang) . ',' : '' . $at['tags'],
		"titles" => ["SUPPORT A PERSECUTED CHRISTIAN", "THANK YOU"],
		"content" =>  $content,
		"loadSpinner" => get_template_directory_uri() . "/public/images/loading.gif",
 	];

	ob_start();
?>

<div
	class="bs-donate-container"
	data-props='<?php echo json_encode($props) ?>'
>
</div>

<?php
return ob_get_clean();
}

add_shortcode('bs_donate_container', 'bs_donate_container_sc');