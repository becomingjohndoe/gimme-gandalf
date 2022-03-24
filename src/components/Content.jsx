function updateClipboard(newClip) {
	navigator.clipboard.writeText(newClip).then(
		function () {
			/* clipboard successfully set */
		},
		function () {
			/* clipboard write failed */
		}
	);
}

function Content({ paragraphs }) {
	return (
		<div className="flex flex-col justify-center text-left p-4 max-w-[600px] mx-auto">
			<button
				onClick={() => {
					updateClipboard(
						paragraphs.map((p) => {
							return p + "\n \n \n";
						})
					).join("");
				}}
			>
				Copy
			</button>
			{paragraphs.map((line, index) => {
				return (
					<p key={index} className="p-4 ">
						{line}
					</p>
				);
			})}
		</div>
	);
}

export default Content;
