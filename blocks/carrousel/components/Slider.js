import { useEffect, useRef } from "react";

function Slider({ children }) {
	const sliderRef = useRef(null);

	useEffect(() => {
		const slider = sliderRef.current;
		let slides = Array.from(slider.children);

		function hideAll() {
			slides.forEach((slide) => {
				slide.setAttribute("hidden", "");
			});
		}

        hideAll()

		slides[0].removeAttribute("hidden");
        let n = 0;

		const interval = setInterval(() => {
			if (n < slides.length - 1) {
				n += 1;
			} else {
				n = 0;
			}

			console.log(n);
			hideAll();
			slides[n].removeAttribute("hidden");
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="slider" ref={sliderRef}>
			{children}
		</div>
	);
}

export default Slider;
