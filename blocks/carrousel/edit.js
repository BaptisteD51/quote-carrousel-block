import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import "./editor.css";

import { useSelect } from "@wordpress/data";
import { store } from "@wordpress/block-editor";
import { RawHTML } from "@wordpress/element";
import Slider from "./components/Slider.js";

/**
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
	const ALLOWED_BLOCKS = ["create-block/slide-block"];
	const { preview } = attributes;

	const slideBlocks = useSelect(
		(select) => select(store).getBlock(clientId).innerBlocks,
	);

	if (preview) {
		return (
			<div
				{...useBlockProps({
					className: "preview-slider",
				})}
			>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton onClick={() => setAttributes({ preview: !preview })}>
							Exit
						</ToolbarButton>
					</ToolbarGroup>
				</BlockControls>

				<Slider>
					{slideBlocks.map((slide) => {
						return (
							<blockquote class="slide">
								<RawHTML>{slide.attributes.quote}</RawHTML>
								<RawHTML>{slide.attributes.author}</RawHTML>
							</blockquote>
						);
					})}
				</Slider>
			</div>
		);
	}

	return (
		<div
			{...useBlockProps({
				className: "no-preview",
			})}
		>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={() => setAttributes({ preview: !preview })}>
						Preview
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
		</div>
	);
}
