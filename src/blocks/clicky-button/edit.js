import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import metadata from './block.json';

import "./editor.scss";
import "./style.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();

	return (
		<>
			<div {...blockProps}>
				<RichText
					label={__("Button Label", metadata.textdomain)}
					value={props.attributes.buttonLabel}
					allowedFormats={[]}
					multiline={false}
					onSplit={() => {}}
					onReplace={() => {}}
					onChange={(buttonLabel) => props.setAttributes({ buttonLabel })}
				/>
			</div>
		</>
	);
}
