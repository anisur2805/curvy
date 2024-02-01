import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ColorPalette } from "@wordpress/block-editor";

import metadata from "../block.json";

export const TopCurveSettings = ({setAttributes, topHeight, topWidth, topFlipX, topFlipY, topColor}) => {

	return (
		<>
			<HorizontalRule />
			<RangeControl
				value={topHeight}
				onChange={(topHeight) =>
					setAttributes({ topHeight: parseInt(topHeight) })
				}
				label={__("Height", metadata.textdomain)}
			/>

			<RangeControl
				value={topWidth}
				onChange={(topWidth) => setAttributes({ topWidth: parseInt(topWidth) })}
				label={__("Width", metadata.textdomain)}
			/>
			<HorizontalRule />
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<ToggleControl
					label="Flip Horizontal"
					checked={topFlipX}
					onChange={(flip) => setAttributes({ topFlipX: flip })}
				/>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<ToggleControl
					label="Flip Vertical"
					checked={topFlipY}
					onChange={(flip) => setAttributes({ topFlipY: flip })}
				/>
			</div>
			<HorizontalRule />
			<ColorPalette
				// disableCustomColors
				// colors={[{
				// 	name: "Yello",
				// 	"color": "#ffff00",
				// 	"default": true
				// }]}
				value={topColor}
				onChange={(topColor) => setAttributes({ topColor: topColor })}
				label={__("Color", metadata.textdomain)}
			/>
		</>
	);
};
