export let chosenSign = "X";

export const startNewGame = () => {
	return new Promise((resolve) => {
		// Change signs
		changeSign();

		// Get main board after clicking new game
		const newGame = document.querySelector("#newGame");
		const wholeBoard = document.querySelector("#wholeBoard");
		const chooseSignBeginning = document.querySelector("#chooseSign");

		newGame.addEventListener("click", () => {
			setStartingPoints();
			wholeBoard.style.display = "block";
			newGame.style.display = "none";
			chooseSignBeginning.style.display = "none";
			resolve();
		});
	});
};

const changeSign = () => {
	// Change sign during newGame screen
	const changeSignO = document.querySelector("#chooseO");
	const changeSignX = document.querySelector("#chooseX");

	// Change for O
	changeSignO.addEventListener("click", () => {
		changeSignO.style.backgroundColor = "rgb(255, 255, 255)";
		changeSignX.style.backgroundColor = "rgb(14, 19, 22)";
		changeSignO.firstElementChild.style.color = "rgb(0, 0, 0)";
		changeSignX.firstElementChild.style.color = "rgb(255, 255, 255)";
		chosenSign = "O";
	});

	// Change for X
	changeSignX.addEventListener("click", () => {
		changeSignX.style.backgroundColor = "rgb(255, 255, 255)";
		changeSignO.style.backgroundColor = "rgb(14, 19, 22)";
		changeSignX.firstElementChild.style.color = "rgb(0, 0, 0)";
		changeSignO.firstElementChild.style.color = "rgb(255, 255, 255)";
		chosenSign = "X";
	});
};

const setStartingPoints = () => {
	// Get the access to points
	const player1Footer = document.querySelector("#player1Points");
	const tieFooter = document.querySelector("#tiePoints");
	const player2Footer = document.querySelector("#player2Points");

	// Set starting points in localStorage
	localStorage.setItem("player1", 0);
	localStorage.setItem("tie", 0);
	localStorage.setItem("player2", 0);
	player1Footer.innerHTML = 0;
	tieFooter.innerHTML = 0;
	player2Footer.innerHTML = 0;
};
