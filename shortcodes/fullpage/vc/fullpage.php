<?php
function acn_fullpage_vc() {
    $links_subparams = [
      [
        'type' => 'textfield',
        'param_name' => 'link',
        'heading' => 'link',
        'value' => '#'
      ],
      [
        'type' => 'textfield',
        'param_name' => 'title',
        'heading' => 'link title',
        'value' => ''
      ]
    ];

    $intro_subparams =  [
      [
        'type' => 'textfield',
        'param_name' => 'title',
        'heading' => 'title',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'delay',
        'heading' => 'slide delay',
        'value' => '1'
      ],
      [
        'type' => 'textfield',
        'param_name' => 'duration',
        'heading' => 'slide duration',
        'value' => '1'
      ]
    ];

    $params = [
      [
        'type' => 'textfield',
        'param_name' => 'unique_name',
        'heading' => 'Component Name',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'story_name',
        'heading' => 'Story name',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'link_donate',
        'heading' => 'Donate link',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'text_donate',
        'heading' => 'Donate text',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'link_pray',
        'heading' => 'Pray link',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'text_pray',
        'heading' => 'Pray text',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'link_privacy',
        'heading' => 'Privacy link',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'text_privacy',
        'heading' => 'Privacy text',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'link_terms',
        'heading' => 'Terms link',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'text_terms',
        'heading' => 'Terms text',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'link_lang',
        'heading' => 'Translation link',
        'value' => ''
      ],
      [
        'type' => 'textfield',
        'param_name' => 'text_lang',
        'heading' => 'Translation text',
        'value' => ''
      ],
      [
        'type' => 'param_group',
        'param_name' => 'links',
        'heading' => 'Menu links',
        'value' => '',
        'params' =>  $links_subparams
      ],
      [
        'type' => 'param_group',
        'param_name' => 'intro',
        'heading' => 'Intro',
        'value' => '',
        'params' =>  $intro_subparams
      ],
      [
        'type' => 'checkbox',
        'heading' => 'Show Intro',
        'param_name' => 'show_intro',
        'value' => false
      ]
    ];

    vc_map(
      array(
        "name" =>  "FullPage",
        "base" => "acn_fullpage",
        "category" =>  "ACN",
				"content_element" => true,
				"show_settings_on_create" => true,
				"is_container" => true,
        "params" => $params,
				"js_view" => 'VcColumnView'
      )
    );
		if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
    	class WPBakeryShortCode_acn_fullpage extends WPBakeryShortCodesContainer {}
		}
  }

add_action( 'vc_before_init', 'acn_fullpage_vc' );
