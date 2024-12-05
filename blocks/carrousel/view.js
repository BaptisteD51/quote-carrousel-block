/* eslint-disable no-console */
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const quoteCarrousel = new Swiper(".wp-block-create-block-quote-carrousel-block.swiper", {
	modules: [Autoplay],
	loop: true,
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
});

/* eslint-enable no-console */
