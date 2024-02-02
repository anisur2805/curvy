import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import metadata from "./block.json";

import "./editor.scss";
import "./style.scss";
import { useSelect } from "@wordpress/data";
import { Icon } from "@wordpress/components";
import icon from "./images/icon.svg";
import { useImage } from "../../hooks/useImage";
import { ImageThumbnail } from "../../components/imageThumbnail";

export default function Edit(props) {
	const blockProps = useBlockProps();

	const image = useImage(props.attributes.imageId);

	const imageSelected = !!props.attributes.imageId && !!image?.source_url;

	return (
		<>
			<div {...blockProps} className="piccy-image-item">
				{!!imageSelected && (
					<ImageThumbnail height="150px" imageId={props.attributes.imageId} />
				)}
				{!imageSelected && (
					<div
						style={{ display: "grid", placeItems: "center", height: "100%" }}
					>
						<img src={icon} alt="Curvy icon" width={16} />
					</div>
				)}
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={["image"]}
						value={props.attributes.imageId}
						onSelect={(image) => {
							props.setAttributes({ imageId: image.id });
						}}
						render={({ open }) => (
							<Button className="piccy-select-image-btn" onClick={open}>
								{!!imageSelected
									? __("Replace image", metadata.textdomain)
									: __("Upload an image", metadata.textdomain)}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>
		</>
	);
}
