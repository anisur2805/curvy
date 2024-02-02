import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
	const image = useImage(props.imageId);
	return image?.source_url ? (
		<img
			className={`piccy-image ${props.className}`}
			style={{ width: "100%", height: props.height || 75 }}
			src={image.source_url}
			onClick={props.onClick}
		/>
	) : null;
};
