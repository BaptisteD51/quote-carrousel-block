/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Didn't find a way to add the swiper-slide class upstream, so did it on rendering
let slides = document.querySelectorAll(".wp-block-create-block-quote-carrousel-block blockquote")
slides.forEach(function(slide){
    slide.classList.add("swiper-slide")
})

const quoteCarrousel = new Swiper(".wp-block-create-block-quote-carrousel-block.swiper", {
	modules: [Autoplay],
	loop: true,
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
});

console.log("Hello World! (from create-block-quote-carrousel-block block)");
/* eslint-enable no-console */
