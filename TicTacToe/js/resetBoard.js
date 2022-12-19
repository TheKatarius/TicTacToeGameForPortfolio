import { allFields, board } from "./markFields.js";

export const resetBoard = () => {
	const resetButton = document.querySelector(".reset-button");
	resetButton.addEventListener("click", () => {
		for (let i = 0; i < 9; i++) {
			allFields[i].classList.remove("main-signX");
			allFields[i].classList.remove("main-signO");
			allFields[i].textContent = "";
			board[i] = 0;
		}
	});
};
