<?php
$get_block_wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'alignfull',
		'style' => 'background-color: ' . $attributes['style']['color']['background'] . '; color: ' . $attributes['style']['color']['text'] . '; padding-top: ' . $attributes['style']['spacing']['padding']['top'] . '; padding-bottom: ' . $attributes['style']['spacing']['padding']['bottom'] . '; padding-left: ' . $attributes['style']['spacing']['padding']['left'] . '; padding-right: ' . $attributes['style']['spacing']['padding']['right'] . ';',
	)
);
// wp_send_json( $attributes );
$link_uri = '#';
if ( $attributes['linkedPost'] ?? null ) {
	$link_uri = get_permalink( $attributes['linkedPost'] );
}

?>
<a  <?php echo $get_block_wrapper_attributes; ?> href="<?php echo esc_url( $link_uri ); ?>">
	<?php echo esc_html( $attributes['buttonLabel'] ); ?>
</a>