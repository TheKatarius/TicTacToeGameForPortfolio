export let chosenSign = "X";

export const setInitialSign = () => {
	// Change sign inside newGame screen
	const changeSignO = document.querySelector(".choose-o");
	const changeSignX = document.querySelector(".choose-x");
	const white = "rgb(255, 255, 255)";
	const black = "rgb(0, 0, 0)";

	// Change for O
	changeSignO.addEventListener("click", () => {
		changeSignO.style.backgroundColor = white;
		changeSignX.style.backgroundColor = black;
		changeSignO.firstElementChild.style.color = black;
		changeSignX.firstElementChild.style.color = white;
		chosenSign = "O";
	});

	// Change for X
	changeSignX.addEventListener("click", () => {
		changeSignX.style.backgroundColor = white;
		changeSignO.style.backgroundColor = black;
		changeSignX.firstElementChild.style.color = black;
		changeSignO.firstElementChild.style.color = white;
		chosenSign = "X";
	});
};
