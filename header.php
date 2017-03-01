<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=0">
  <meta name="theme-color" content="#f1364e">
  <meta property="title" content="<?php echo get_the_title(); ?>" />
  <meta property="og:title" content="<?php echo get_the_title(); ?>" />
  <meta property="og:url" content="<?php echo the_permalink() ?>" />
	<title>ACN - Aid to the Church in Need <?php echo wp_title(); ?></title>
		<!--wordpress files-->
	  <?php wp_head(); ?>
		<!-- /wordpress files-->
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/public/css/index.css">
	<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
	<script>
      function onLoad(cb) {
        if (window.addEventListener)
          window.addEventListener("load", cb, false);
        else if (window.attachEvent) {
          window.attachEvent("onload", cb);
        } else {
          window.onload = cb;
        }
      }
  </script>
</head>
<body>
<?php if(get_option('gta_id')): ?>
<!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo get_option('gta_id') ?>"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','<?php echo get_option('gta_id') ?>');</script>
  <!-- End Google Tag Manager -->

<?php endif; ?>

<?php require('templates/nav.php') ?>