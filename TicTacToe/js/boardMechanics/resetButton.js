import { board, allFields } from "./markFields.js";
import { winningCombination } from "./winnerFields.js";

export const resetButton = new Promise(() => {
	const resetButton = document.querySelector(".reset-button");
	resetButton.addEventListener("click", () => {
		for (let i = 0; i < board.length; ++i) {
			allFields[i].classList.remove("main-signX");
			allFields[i].classList.remove("main-signO");
			allFields[i].textContent = "";
			allFields[i].removeAttribute("id", "winner-main-signX");
			allFields[i].removeAttribute("id", "winner-main-signO");
			winningCombination.length = 0;
			board[i] = 0;
		}
	});
});
