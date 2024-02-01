import { __ } from "@wordpress/i18n";
import { Curve } from "./Components/Curve";
import { Panel, PanelBody, ToggleControl } from "@wordpress/components";

import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";

import "./editor.scss";
import metadata from "./block.json";
import { TopCurveSettings } from "./Components/topCurveSettings";
import { BottomCurveSettings } from "./Components/bottomCurveSettings";

export default function Edit({
	attributes: {
		enableTopCurved,
		topHeight,
		topWidth,
		topFlipX,
		topFlipY,
		bottomFlipX,
		bottomFlipY,
		topColor,
		enableBottomCurved,
		bottomHeight,
		bottomWidth,
		bottomColor,
	},
	setAttributes,
}) {
	const { className, ...blockProps } = useBlockProps();
	return (
		<>
			<section
				style={{ position: "relative" }}
				className={`${className} alignfull`}
				{...blockProps}
			>
				{enableTopCurved && (
					<Curve
						color={topColor}
						flipX={topFlipX}
						flipY={topFlipY}
						height={topHeight}
						width={topWidth}
					/>
				)}

				<div>
					<InnerBlocks />
				</div>

				{enableBottomCurved && (
					<Curve
						isBottom={true}
						color={bottomColor}
						flipX={bottomFlipX}
						flipY={bottomFlipY}
						height={bottomHeight}
						width={bottomWidth}
					/>
				)}
			</section>

			<InspectorControls>
				<Panel header="Curvy Settings">
					<PanelBody title={__("Top Curved Settings", metadata.textdomain)}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<ToggleControl
								label="Enable Top Curved"
								checked={enableTopCurved}
								onChange={(toggleControl) =>
									setAttributes({ enableTopCurved: toggleControl })
								}
							/>
						</div>
						{enableTopCurved && (
							<TopCurveSettings
								setAttributes={setAttributes}
								topColor={topColor}
								bottomColor={bottomColor}
								topFlipX={topFlipX}
								topFlipY={topFlipY}
								topHeight={topHeight}
								topWidth={topWidth}
							/>
						)}
					</PanelBody>

					<PanelBody title={__("Bottom Curved Settings", metadata.textdomain)}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<ToggleControl
								label="Enable Bottom Curved"
								checked={enableBottomCurved}
								onChange={(toggleControl) =>
									setAttributes({ enableBottomCurved: toggleControl })
								}
							/>
						</div>
						{enableBottomCurved && (
							<BottomCurveSettings
								setAttributes={setAttributes}
								topColor={topColor}
								bottomColor={bottomColor}
								bottomFlipX={bottomFlipX}
								bottomFlipY={bottomFlipY}
								bottomHeight={bottomHeight}
								bottomWidth={bottomWidth}
							/>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
}
