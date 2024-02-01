import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
	JustifyContentControl,
} from "@wordpress/block-editor";
import { parseValue } from "../utiles/utiles";

import "./editor.scss";

export default function Edit(props) {
	console.log(props);
	console.log({ props });

	const blockGap = parseValue(props.attributes.style.spacing.blockGap);
	const blockProps = useBlockProps({
		style: {
			gap: blockGap,
			justifyContent: props.attributes.justifyContent,
		},
	});
	console.log({ blockGap });
	const _useInnerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["create-block/clicky-button", {}]],
		allowedBlocks: ["create-block/clicky-button"],
	});
	return (
		<>
			<BlockControls>
				<JustifyContentControl
					value={props.attributes.justifyContent}
					allowedControls={["left", "center", "right"]}
					onChange={(justifyContent) => props.setAttributes({ justifyContent })}
				></JustifyContentControl>
			</BlockControls>
			<div {..._useInnerBlocksProps} />
		</>
	);
}
