import { startNewGame, chosenSign } from "./newGame.js";
import { markFields } from "./markFields.js";
import { gameOver } from "./gameOver.js";
import { resetBoard } from "./resetBoard.js";

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		startGame();
	}
});

function startGame() {
	// Start newGame, choose sign and set starting localStorage's points
	startNewGame().then(() => {
		const sign = chosenSign;
		markFields(gameOver, sign);
		resetBoard();
	});
}
