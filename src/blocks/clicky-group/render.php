<?php
use AR_Curvy\Curvy;
$block_gap = Curvy::convert_custom_properties( $attributes['style']['spacing']['blockGap'] ?? 0 );
// wp_send_json( $block_gap );
$get_block_wrapper_attributes = get_block_wrapper_attributes(
	array(
		'style' => 'gap: ' . $block_gap . '; justify-content: ' . $attributes['justifyContent'],
	)
);
?>
<div <?php echo $get_block_wrapper_attributes; ?>>
<?php echo $content; ?></div>
