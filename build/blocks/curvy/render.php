<?php
$get_block_wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'alignfull',
	)
);
$normal_path                  = 'M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z';
$inverted_path                = 'M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z';

$is_bottom     = $attributes['isBottom'];
$top_flip_x    = $attributes['topFlipX'];
$top_flip_y    = $attributes['topFlipY'];
$bottom_flip_x = $attributes['bottomFlipX'];
$bottom_flip_y = $attributes['bottomFlipY'];
$top_color     = $attributes['topColor'];

// wp_send_json( $is_bottom );
?>
<div <?php echo $get_block_wrapper_attributes; ?>>
	<div class="curve top-curve" style="display: <?php echo $attributes['enableTopCurved'] ? 'block' : 'none'; ?>; height: <?php echo $attributes['topHeight']; ?>px; top: <?php echo $is_bottom ? 0 : 'initial'; ?>; transform: scaleX(<?php echo $top_flip_x ? -1 : 1; ?>) scaleY(<?php echo ! $is_bottom ? -1 : 1; ?>) rotate(<?php echo $top_flip_y ? 180 : 0; ?>deg)">
		<svg viewBox="0 0 1440 320" preserveAspectRatio="none"  style="height: <?php echo $attributes['topHeight']; ?>px; width: <?php echo $attributes['topWidth']; ?>%; fill: <?php echo $attributes['topColor']; ?>">
			<path d="<?php echo $top_flip_y ? $inverted_path : $normal_path; ?>"></path>
		</svg>
	</div>

	<?php echo $content; ?>

	<div class="curve bottom-curve" style="display: <?php echo $attributes['enableBottomCurved'] ? 'block' : 'none'; ?>;height: <?php echo $attributes['bottomHeight']; ?>px; bottom: <?php echo $is_bottom ? 0 : 'initial'; ?>; transform: scaleY(1) scaleX(<?php echo $bottom_flip_x ? -1 : 1; ?>) scaleY(<?php echo $is_bottom ? -1 : 1; ?>) rotate(<?php echo $bottom_flip_y ? 180 : 0; ?>deg)">
		<svg viewBox="0 0 1440 320" preserveAspectRatio="none"  style="height: <?php echo $attributes['bottomHeight']; ?>px; width: <?php echo $attributes['bottomWidth']; ?>%; fill: <?php echo $attributes['bottomColor']; ?>">
			<path d="<?php echo $bottom_flip_y ? $inverted_path : $normal_path; ?>"></path>
		</svg>
	</div>
</div>
