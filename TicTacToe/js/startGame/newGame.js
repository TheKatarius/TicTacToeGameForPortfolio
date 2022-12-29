import { setInitialSign } from "./setInitialSign.js";
import { setInitialPoints } from "./setInitialPoints.js";

export const startNewGame = new Promise((resolve) => {
	setInitialSign();

	// Generate Main Board
	const wholeBoard = document.querySelector(".whole-board");
	const newGame = document.querySelector(".new-game-button");
	const selectInitialSign = document.querySelector(".choose-sign-window");

	newGame.addEventListener("click", () => {
		setInitialPoints();
		wholeBoard.style.display = "block";
		newGame.style.display = "none";
		selectInitialSign.style.display = "none";
		resolve();
	});
});
