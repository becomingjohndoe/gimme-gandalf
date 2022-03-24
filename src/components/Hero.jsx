import { useRef, useEffect, useState } from "react";

import gandalfOne from "../images/gandalf-1.jpg";
import gandalfTwo from "../images/gandalf-2.jpg";
import gandalfThree from "../images/gandalf-3.webp";

function Hero() {
	const [image, setImage] = useState("g1");
	const g1 = useRef(null);
	const g2 = useRef(null);
	const g3 = useRef(null);
	const bg = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			switch (image) {
				case "g1":
					g1.current.classList.remove("opacity-1");
					g1.current.classList.add("opacity-0");
					g2.current.classList.remove("opacity-0");
					g2.current.classList.add("opacity-1");
					setImage("g2");
					break;
				case "g2":
					g2.current.classList.remove("opacity-1");
					g2.current.classList.add("opacity-0");
					g3.current.classList.remove("opacity-0");
					g3.current.classList.add("opacity-1");
					setImage("g3");
					break;
				case "g3":
					g3.current.classList.remove("opacity-1");
					g3.current.classList.add("opacity-0");
					g1.current.classList.remove("opacity-0");
					g1.current.classList.add("opacity-1");
					setImage("g1");
					break;
				default:
					break;
			}
		}, 10000);
	}, [image]);

	return (
		<div
			ref={bg}
			className="hero-bg-transition overflow-hidden h-hero bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-600 "
		>
			<div className="max-w-[1124px] mx-auto">
				<div className="absolute h-hero w-full sm:w-hero overflow-hidden sm:ml-8 sm:mt-8 shadow-slate-900 shadow-lg">
					<img
						ref={g1}
						src={gandalfOne}
						alt=""
						className="h-hero w-hero object-cover absolute  zoominheader opacity-1 overflow-hidden"
					/>
					<img
						ref={g2}
						src={gandalfTwo}
						alt=""
						className="h-hero w-hero object-cover absolute  zoominheader opacity-0 overflow-hidden"
					/>
					<img
						ref={g3}
						src={gandalfThree}
						alt=""
						className="h-hero w-hero object-cover absolute  zoominheader opacity-0 overflow-hidden"
					/>
				</div>
				<div className="relative top-44 md:left-36">
					<div className="text-slate-50 lg:text-[11rem] sm:text-[9rem] text-7xl font-extrabold mr-1 drop-shadow-2xl">
						Gandsum.
					</div>
					<p className="relative text-slate-200 top-4 text-2xl lg:left-36 font-bold">
						A text placeholder generator, with Gandalf!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
