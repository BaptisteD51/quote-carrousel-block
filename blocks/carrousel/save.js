import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * @return {Element} Element to render.
 */
export default function save() {
    const blockProps = useBlockProps.save({
        className:"swiper"
    })

	return (
		<div { ...blockProps }>
            <div class="swiper-wrapper">
                <InnerBlocks.Content/>
            </div>
		</div>
	);
}
