<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=0">
  <meta name="theme-color" content="#f1364e">
  <meta property="title" content="<?php echo get_the_title(); ?>" />
	<meta property="description" content="<?php echo get_the_excerpt(); ?>" />

  <meta property="og:title" content="<?php echo get_the_title(); ?>" />
  <meta property="og:url" content="<?php echo the_permalink() ?>" />
  <meta property="og:image" content="<?php echo get_the_post_thumbnail_url() ?>?fbrefresh=" />
	<meta property="og:description" content="<?php echo get_the_excerpt(); ?>" />

  <meta name="twitter:title" content="<?php echo get_the_title(); ?>">
  <meta name="twitter:image" content="<?php echo get_the_post_thumbnail_url() ?>">
  <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:description" content="<?php echo get_the_excerpt(); ?>" />

  <title>ACN / Aid to the Church in Need - <?php echo wp_title(); ?></title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  <!--wordpress files-->
		<?php wp_head(); ?>
	<!-- /wordpress files-->

	<link
		rel="stylesheet"
		href="<?php echo get_template_directory_uri() ?>/client/dist/fullpage.css?v=<?php echo filemtime(get_template_directory() . '/client/dist/fullpage.css') ?>">
		<!-- ConvertLoop -->
		<script>
			!function(t,e,n,s) { t.DPEventsFunction=s,t[s]=t[s] || function() { (t[s].q=t[s].q||[]).push(arguments) }; var c=e.createElement("script"),o=e.getElementsByTagName("script")[0]; c.async=1,c.src=n,o.parentNode.insertBefore(c,o); }(window, document, "https://www.convertloop.co/v1/loop.min.js", "_dp");

			_dp("configure", { appId: "746fffe4" });
			_dp("pageView");
		</script>

		<!-- End ConvertLoop -->

</head>
<body>

 <a href="<?php echo esc_url($_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']) ?>" class="fullpage-logo">
  <img src='<?php echo bs_logo_url(); ?>'  alt="ACN logo" class="img-responsive" width="170"  />
</a>
