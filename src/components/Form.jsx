import { useRef, useState } from "react";

import Content from "./Content";
import lines from "../constants/lines.jsx";

function Form() {
	const formRef = useRef(null);
	const [paragraphs, setParagraphs] = useState([]);

	const getLines = (lines, amount) => {
		let result = [];

		for (let i = 0; i < amount; i++) {
			let string = "";

			while (string.length < 280) {
				let random = Math.floor(Math.random() * lines.docs.length);
				string += " " + lines.docs[random].dialog;
			}
			result[i] = string;
		}
		setParagraphs(result);
	};

	return (
		<>
			<div className="flex justify-end">
				<div className="bg-yellow-700 z-20 relative lg:w-1/2 w-full h-16 lg:mr-4 -top-8 items-center flex justify-center shadow-slate-900 shadow-lg">
					<span className="text-slate-50 mr-4 font-bold">I'll have </span>
					<input
						ref={formRef}
						className="w-12 p-1"
						type="number"
						min="1"
						max="10"
						defaultValue="3"
					/>
					<span className="text-slate-50 ml-4 font-bold">
						paragraphs of Gandalf{" "}
					</span>
					<button
						onClick={() => {
							getLines(lines, formRef.current.value);
						}}
						className="text-slate-50 ml-4 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-600 p-3 rounded-md border"
					>
						<span className="font-bold text-slate-700">Get the Gand</span>
					</button>
				</div>
			</div>
			<Content paragraphs={paragraphs} />
		</>
	);
}

export default Form;

// g1de6WzRRHd_LaSFWbGk
