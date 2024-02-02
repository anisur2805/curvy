import { registerBlockType, createBlock } from "@wordpress/blocks";

import "./style.scss";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import icon from "./images/clicky.svg";

registerBlockType(metadata.name, {
	edit,
	save,
	icon: <img src={icon} alt="Curvy icon" width={16} />,
});
