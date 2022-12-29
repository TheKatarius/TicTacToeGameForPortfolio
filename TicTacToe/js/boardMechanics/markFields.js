import { gameOver } from "./gameOver.js";
import { resetButton } from "./resetButton.js";

// Set all fields to 0 - field is empty
const fieldsNumber = 9;
export const board = new Array(fieldsNumber).fill(0);
export const allFields = document.querySelectorAll(".board div");

export const markFields = (sign) => {
	// Change Turn
	const displayTurn = document.querySelector(".sign");
	displayTurn.textContent = sign;

	// Reset Button(Promise - to have access all the time)
	resetButton;

	for (let i = 0; i < fieldsNumber; ++i) {
		allFields[i].addEventListener("click", () => {
			// If turn is correct and the field is not occupied
			if (sign === "X" && board[i] === 0) {
				allFields[i].classList.add("main-signX");
				allFields[i].textContent = sign;
				board[i] = sign;
				gameOver(board, sign);
				sign = "O";
			} else if (sign === "O" && board[i] === 0) {
				allFields[i].classList.add("main-signO");
				allFields[i].textContent = sign;
				board[i] = sign;
				gameOver(board, sign);
				sign = "X";
			}
			displayTurn.textContent = sign;
		});
	}
};
