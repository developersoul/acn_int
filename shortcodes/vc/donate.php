<?php

  function bs_donate_react_vc() {
		$params = [];
    $atts = [
      "other" => "Other",
      "monthly" => "Monthly",
      "once" => "Once",
      "placeholder_amount" => "Amount",
      "placeholder_credit_card" => "Credit Card Number",
      "placeholder_month" => "MM",
      "placeholder_year" => "YY",
      "placeholder_cvc" => "CVC",
       "explain_cvc" => "The last 3 digits displayed on the back of your credit card.",
      "placeholder_name" => "Name",
      "placeholder_email" => "Email",
      "placeholder_country" => "Country",
      "validation_declined" => "Your transaction was not accepted, try again",
      "validation_card" => "Incorrect card",
      "validation_month" => "Incorrect month",
      "validation_year" => "Incorrect year",
      "validation_cvc" => "Incorrect cvc",
      "validation_name" => "Incorrect name",
      "validation_email" => "Incorrect email",
      "validation_country" => "Incorrect country",
      "step_amount_text" => "Select Gift Amount",
      "step_payment_text" => "Payment Details",
      "step_contact_text" => "Your Information",
      "donate_monthly_redirect" => get_option('donate_monthly_redirect'),
 		  "donate_once_redirect" => get_option('donate_once_redirect')
    ];

    foreach($atts as $key => $val) {
      array_push($params, [
         "type" => "textfield",
         "heading" =>  str_replace('_', ' ', $key),
         "param_name" => $key,
         "value" => $val

      ]);
    }

    array_push($params, [
      "type" => "checkbox",
      "heading" =>  "Blue?",
      "param_name" => "is_blue",
      "value" => false
    ]);

    array_push($params, [
      "type" => "checkbox",
      "heading" =>  "Enable Cache",
      "param_name" => "enable_cache",
      "value" => false
    ]);


  	vc_map(
      array(
        "name" =>  "BS Donate",
        "base" => "bs_donate_react",
        "category" =>  "BS",
        "params" => $params
      )
    );
  }

add_action( 'vc_before_init', 'bs_donate_react_vc' );
