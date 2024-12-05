import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.css";

/**
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const { quote, author } = attributes;

	return (
		<div {...useBlockProps()}>
			<RichText
				placeholder="Quote..."
				onChange={(value) => {
					setAttributes({ quote: value });
				}}
				value={quote}
                className="quote-rich-text"
			/>
			<RichText
				placeholder="Author..."
				onChange={(value) => {
					setAttributes({ author: value });
				}}
				value={author}
                className="author-rich-text"
			/>
		</div>
	);
}
