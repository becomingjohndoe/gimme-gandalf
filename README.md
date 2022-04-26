# Gimme Gandalf

A text placeholder generator using Gandalf quotes from the LOTR movies. Alternative to Lorem Ipsum.

[![Netlify Status](https://api.netlify.com/api/v1/badges/41bfd849-7f00-4312-9523-4e32e6a064cf/deploy-status)](https://app.netlify.com/sites/gandsum/deploys)

# Visuals

<img src='./gif.gif' />

# Installation

```bash
git clone https://github.com/becomingjohndoe/gimme-gandalf.git
```

```bash
npm install
```

# Usage

```bash
npm start
```

# Built With

React.js, Tailwind.css, and Netlify.

# Details

```javasxript
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
```

To receive the paragraphs, this simple function iterates over the array of lines from the movies and concatenates them into strings of 280 characters or less.
