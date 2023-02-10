import { winnerFields, winningCombination } from "./winnerFields.js";
import { displayWinner } from "../endGame/displayWinner.js";
import { board } from "./markFields.js";
import { markWinnerFields } from "./markWinnerFields.js";

export const gameOver = (board, sign) => {
	// Get the Data from LocalStorage
	let player1Points = Number(localStorage.getItem("player1"));
	let tiePoints = Number(localStorage.getItem("tie"));
	let player2Points = Number(localStorage.getItem("player2"));
	const player1Footer = document.querySelector("#player1Points");
	const tieFooter = document.querySelector("#tiePoints");
	const player2Footer = document.querySelector("#player2Points");

	const gameOver = winnerFields(board, sign);
	// Print Winner!
	if (gameOver) {
		blockFields();
		if (sign === "X") {
			localStorage.setItem("player1", ++player1Points);
			player1Footer.textContent = player1Points;
			markWinnerFields("X");
			displayWinner("X");
		} else if (sign === "O") {
			localStorage.setItem("player2", ++player2Points);
			player2Footer.textContent = player2Points;
			markWinnerFields("O");
			displayWinner("O");
		}
	} else {
		// If none of fields return 0, then all fields are occupied
		const tie = board.indexOf(0);
		if (tie === -1) {
			blockFields();
			localStorage.setItem("tie", ++tiePoints);
			tieFooter.textContent = tiePoints;
			displayWinner();
		}
	}
};

const blockFields = () => {
	for (let i = 0; i < board.length; ++i) {
		if (board[i] === 0) {
			// Field does not have a sign, but neither 0, so it cannot be marked
			board[i] = 1;
		}
	}
};
