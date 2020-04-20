

// Clear the concole on every refresh
console.clear();



// Object of all the function names that we will use to create random letters of password
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

// Generator Functions
// All the functions that are responsible to return a random value taht we will use to create password.
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// // Selecting all the DOM Elements that are necessary -->
//
// // The Viewbox where the result will be shown
// const resultEl = document.getElementById("result");
// // The input slider, will use to change the length of the password
// const lengthEl = document.getElementById("slider");
//
// // Checkboxes representing the options that is responsible to create differnt type of password based on user
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numberEl = document.getElementById("number");
// const symbolEl = document.getElementById("symbol");
//
// // Button to generate the password
// const generateBtn = document.getElementById("generate");
// // Button to copy the text
// const copyBtn = document.getElementById("copy-btn");
// // Result viewbox container
// const resultContainer = document.querySelector(".result");
// // Text info showed after generate button is clicked
// const copyInfo = document.querySelector(".result__info.right");
// // Text appear after copy button is clicked
// const copiedInfo = document.querySelector(".result__info.left");

// Update Css Props of the COPY button
// Getting the bounds of the result viewbox container
// let resultContainerBound = {
// 	left: resultContainer.getBoundingClientRect().left,
// 	top: resultContainer.getBoundingClientRect().top,
// };
// // This will update the position of the copy button based on mouse Position
// resultContainer.addEventListener("mousemove", e => {
// 	copyBtn.style.setProperty("--x", `${e.x - resultContainerBound.left}px`);
// 	copyBtn.style.setProperty("--y", `${e.y - resultContainerBound.top}px`);
// });
// window.addEventListener("resize", e => {
// 	resultContainerBound = {
// 		left: resultContainer.getBoundingClientRect().left,
// 		top: resultContainer.getBoundingClientRect().top,
// 	};
// });

// // Copy Password in clipboard
// page2.copyBtn.on("click", () => {
// 	const textarea = document.createElement("textarea");
// 	const password = page2.message.text;
// 	if (!password || password == "password:") {
// 		return;
// 	}
// 	textarea.value = password;
// 	document.body.appendChild(textarea);
// 	textarea.select();
// 	document.execCommand("copy");
// 	textarea.remove();
//
// 	page2.copyInfo.style.transform = "translateY(200%)";
// 	pahge2.copyInfo.style.opacity = "05";
// 	page2.copiedInfo.style.transform = "translateY(0%)";
// 	pages2.copiedInfo.style.opacity = "0.8";
// });

// When Generate is clicked Password id generated.
// generateBtn.addEventListener("click", () => {
// 	const length = +lengthEl.value;
// 	const hasLower = lowercaseEl.checked;
// 	const hasUpper = uppercaseEl.checked;
// 	const hasNumber = numberEl.checked;
// 	const hasSymbol = symbolEl.checked;
// 	resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
// 	copyInfo.style.transform = "translateY(0%)";
// 	copyInfo.style.opacity = "0.75";
// 	copiedInfo.style.transform = "translateY(200%)";
// 	copiedInfo.style.opacity = "0";
// });
//
// // Function responsible to generate password and then returning it.
// function generatePassword(length, lower, upper, number, symbol) {
// 	let generatedPassword = "";
// 	const typesCount = lower + upper + number + symbol;
// 	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
// 	if (typesCount === 0) {
// 		return "";
// 	}
// 	for (let i = 0; i < length; i++) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
// 			generatedPassword += randomFunc[funcName]();
// 		});
// 	}
// 	return generatedPassword.slice(0, length);
// }
