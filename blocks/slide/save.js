import { useBlockProps } from "@wordpress/block-editor";
import { RawHTML } from "@wordpress/element";

/**
 * @return {Element} Element to render.
 */
export default function save({ attributes, setAttributes }) {
	const blockProps = useBlockProps.save({
		className: "swiper-slide",
	});

	const { quote, author } = attributes;

	return (
		<blockquote {...blockProps}>
			<p>
				<RawHTML>{quote}</RawHTML>
			</p>
			<cite>
				<RawHTML>{author}</RawHTML>
			</cite>
		</blockquote>
	);
}
