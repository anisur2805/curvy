import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import metadata from "./block.json";
import { useSelect } from "@wordpress/data";
import { PanelBody } from "@wordpress/components";
import { SelectControl } from "@wordpress/components";

import "./editor.scss";
import "./style.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();

	const postTypes = useSelect((select) => {
		const post_types = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return post_types?.filter(
			(item) => item.visibility.show_in_nav_menus && item.visibility.show_ui,
		);

	});

	const posts = useSelect(
		(select) => {
			return select("core").getEntityRecords(
				"postType",
				props.attributes.postType,
				{
					per_page: -1,
				},
			);
		},
		[props.attributes.postType],
	);

	console.log( {posts} )

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Destination", metadata.textdomain)}>
					<SelectControl
						value={props.attributes.postType}
						onChange={(postType) => props.setAttributes({ postType })}
						label={__("Post Type", metadata.textdomain)}
						options={[
							{
								label: `Select ${props.attributes.postType} ...`,
								value: "",
							},
							...(postTypes || []).map((postType) => {
								return {
									label: postType.labels.singular_name,
									value: postType.slug,
								};
							}),
						]}
					/>

					{!!props.attributes.postType && (
						<SelectControl
							value={props.attributes.linkedPost}
							onChange={(newVal) => props.setAttributes({ linkedPost: newVal ? parseInt(newVal) : null })}
							label={__(`Linked ${props.attributes.postType}`, metadata.textdomain)}
							options={[
								{
									label: `Select a ${props.attributes.postType} to link to`,
									value: "",
								},
								...(posts || []).map((post) => {
									return {
										label: post?.title?.rendered,
										value: post.id,
									};
								}),
							]}
						/>
					)}
				</PanelBody>
			</InspectorControls>
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
