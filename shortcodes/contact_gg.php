<?php

function bs_contact_gg_sc($atts, $content = null) {
	$attributes = [];

  $at = shortcode_atts( $attributes , $atts );

  $query = new Wp_Query(array(
    'post_type' => array('contact'),
    'post_status' => 'publish'
  ));

  $contacts = array_map(function($contact) {
    $contact->countries = get_post_meta($contact->ID, 'contact_gg_countries_key', true);
  	$contact->fields = get_post_meta($contact->ID, 'contact_gg_info_key', true);
  	$contact->image = get_the_post_thumbnail_url($contact->ID, 'full');
    return $contact;
  }, $query->get_posts());

	$props = [
		'contactTitle' => 'The ACN Head of Section for this country is:',
    'contacts' => $contacts,
    'continents' => getContinents()
  ];

  ob_start();
?>

<div
	class="bs-contacts-gg"
	data-props='<?php echo json_encode($props) ?>'
>
</div>

<?php

  return ob_get_clean();
}

add_shortcode( 'bs_contact_gg', 'bs_contact_gg_sc' );
