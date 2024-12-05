import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
} from "@wordpress/block-editor";
import "./editor.css";

/**
 * @return {Element} Element to render.
 */
export default function Edit() {
	const ALLOWED_BLOCKS = ["create-block/slide-block"];
    console.log({...useBlockProps()})

	return (
		<>
			<div {...useBlockProps()}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</>
	);
}
