import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ColorPalette } from "@wordpress/block-editor";

import metadata from "../block.json";

export const BottomCurveSettings = ({setAttributes, bottomHeight, bottomWidth, bottomFlipX, bottomFlipY, bottomColor}) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				value={bottomHeight}
				onChange={(bottomHeight) =>
					setAttributes({ bottomHeight: parseInt(bottomHeight) })
				}
				label={__("Height", metadata.textdomain)}
			/>

			<RangeControl
				value={bottomWidth}
				onChange={(bottomWidth) => setAttributes({ bottomWidth: parseInt(bottomWidth) })}
				label={__("Width", metadata.textdomain)}
			/>
			<HorizontalRule />
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<ToggleControl
					label="Flip Bottom Horizontal"
					checked={bottomFlipX}
					onChange={(flip) => setAttributes({ bottomFlipX: flip })}
				/>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<ToggleControl
					label="Flip Bottom Vertical"
					checked={bottomFlipY}
					onChange={(flip) => setAttributes({ bottomFlipY: flip })}
				/>
			</div>
			<HorizontalRule />
			<ColorPalette
				value={bottomColor}
				onChange={(bottomColor) => setAttributes({ bottomColor: bottomColor })}
				label={__("Color", metadata.textdomain)}
			/>
		</>
	);
};
