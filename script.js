const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');
const button = document.querySelector(".button");

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}


_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}


function getRandomColor(){
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i< 6; i++){
		color += letters[Math.floor(Math.random()* 16)];
	}
	return color;
}

function generateRandomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

button.addEventListener("click",generateRandomGradient);



// const button = document.querySelector(".button");
// function setGradient(){
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value + ", " 
// 	+ color2.value + ")";

// 	css.textContent = body.style.background + ";";

// }

// function getRandomColor(){
// 	var letters = "0123456789ABCDEF";
// 	var color = "#";
// 	for (var i = 0; i< 6; i++){
// 		color += letters[Math.floor(Math.random()* 16)];
// 	}
// 	return color;
// }

// function generateRandomGradient(){
// 	color1.value = getRandomColor();
// 	color2.value = getRandomColor();
// 	setGradient();
// }

// button.addEventListener("click",generateRandomGradient);

// color1.addEventListener("input",setGradient);

// color2.addEventListener("input", setGradient);
// setGradient();