import { startNewGame } from "./startGame/newGame.js";
import { chosenSign } from "./startGame/setInitialSign.js";
import { markFields } from "./boardMechanics/markFields.js";

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		startGame();
	}
});

function startGame() {
	startNewGame.then(() => {
		markFields(chosenSign);
	});
}
