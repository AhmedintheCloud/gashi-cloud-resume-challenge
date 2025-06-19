// JavaScript Code 
const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let reponse = await fetch("https://56yrydieggu5loccqbi53336qu0vdovz.lambda-url.us-east-2.on.aws/");
	let data = await response.json();
	counter.innerHTML = ' Views: ${data}';
} 