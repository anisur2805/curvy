import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	useBlockProps.save();
	return null;
}
