<?php
$get_block_wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $get_block_wrapper_attributes; ?>>
	<div class="preview-mode" <?php echo $get_block_wrapper_attributes; ?>>
		<div class="preview-mode-header">
			<?php echo $content; ?>
		</div>
		<div class="piccy-gallery-image-preview-wrapper">
            <img class="piccy-gallery-image-preview" />
        </div>
	</div>
</div>