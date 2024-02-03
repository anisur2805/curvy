<?php
$get_block_wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'wp-block-piccy-image piccy-gallery-thumb',
	)
);
$image_uri                    = wp_get_attachment_url( $attributes['imageId'] );
$image_uri_large                    = wp_get_attachment_url( $attributes['imageId'], 'large' );
?>
<img data-large-size="<?php echo $image_uri_large; ?>" <?php echo $get_block_wrapper_attributes; ?> src="<?php echo esc_url( $image_uri ); ?>" />