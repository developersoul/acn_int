<script>
  var bs = {};
  bs.lang = '<?php echo getCountryLang(getCountry()) ?>';
  bs.donate = '<?php echo gett('Donate') ?>';
</script>

<script src="<?php echo get_template_directory_uri() ?>/client/dist/vendor.js?v=<?php echo filemtime(get_template_directory() . '/client/dist/vendor.js') ?>"></script>
<script src="<?php echo get_template_directory_uri() ?>/client/dist/app.js?v=<?php echo filemtime(get_template_directory() . '/client/dist/app.js') ?>
"></script>
<script
  src="<?php echo get_template_directory_uri() ?>/client/dist/vendor_me.js?v=<?php echo filemtime(get_template_directory() . '/client/me/vendor_me.js') ?>"></script>
<script
  src="<?php echo get_template_directory_uri() ?>/client/dist/app_me.js?v=<?php echo filemtime(get_template_directory() . '/client/me/app_me.js') ?>"></script>

</body>
</html>
