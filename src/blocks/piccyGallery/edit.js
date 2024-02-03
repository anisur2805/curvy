import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import metadata from "./block.json";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { useState } from "@wordpress/element";

import "./editor.scss";
import "./style.scss";
import { useSelect } from "@wordpress/data";
import { ImageThumbnail } from "../../components/imageThumbnail";

export default function Edit(props) {
	const [editMode, setEditMode] = useState(true);
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{
			className: "piccy-gallery-inner-block",
		},
		{
			allowedBlocks: ["create-block/piccy-image"],
		},
	);

	const innerBlocks = useSelect((select) => {
		const { getBlocksByClientId } = select("core/block-editor");
		const block = getBlocksByClientId(props.clientId)?.[0];
		return block?.innerBlocks;
	});

	const [previewImageId, setPreviewImageId] = useState({
		imageId: innerBlocks?.[0]?.attributes?.imageId,
		blockId: innerBlocks?.[0]?.clientId,
	});

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={<Icon icon={editMode ? "welcome-view-site" : "edit"} />}
						label={
							editMode
								? __("preview", metadata.textdomain)
								: __("Edit", metadata.textdomain)
						}
						onClick={() => setEditMode(!editMode)}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				{!!editMode && (
					<div className="edit-mode">
						<span className="edit-mode-label">
							{__("Edit mode", metadata.textdomain)}
						</span>
						<div {...innerBlockProps} />
					</div>
				)}
				{!editMode && (
					<>
						<div className="preview-mode">
							<div className="preview-mode-header">
								{(innerBlocks || []).map((block) => (
										<ImageThumbnail
										key={block.clientId}
										imageId={block.attributes.imageId}
										className={`piccy-gallery-thumb ${
											block.attributes.imageId === previewImageId.imageId ? "selected" : ""
										}`}
										onClick={() => {
											console.log(block.attributes.imageId, block.clientId);
											setPreviewImageId({
												imageId: block.attributes.imageId,
												blockId: block.clientId,
											});
										}}
									/>
								))}
							</div>
							<div className="preview-mode-single">
								<ImageThumbnail
									key={previewImageId.clientId}
									height="initial"
									imageId={previewImageId.imageId}
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
