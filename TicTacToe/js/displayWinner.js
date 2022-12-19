import { allFields, board, markFields } from "./markFields.js";

// Display window of winner
export const displayWinner = (sign = 0) => {
	const winnerWindow = document.querySelector("#winnerWindow");
	winnerWindow.classList.add("winner-window");
	const winnerString = document.createElement("p");
	if (sign === "X") {
		winnerString.textContent = "X Wins!";
		winnerString.style.color = "rgb(26, 217, 12)";
	} else if (sign === 0) {
		winnerString.textContent = "Tie!";
		winnerString.style.color = "rgb(192, 192, 192)";
	} else if (sign === "O") {
		winnerString.textContent = "O Wins!";
		winnerString.style.color = "rgb(192, 39, 39)";
	}
	winnerString.style.fontSize = "3em";
	winnerWindow.prepend(winnerString);

	// Click Quit Button
	const quitButton = document.querySelector("#quitButton");
	quitButton.classList.add("quit-button");
	quitButton.textContent = "Quit";
	quitButton.addEventListener("click", () => {
		location.reload();
	});

	// Click Next Round Button
	const nextRoundButton = document.querySelector("#nextRoundButton");
	nextRoundButton.classList.add("next-round-button");
	nextRoundButton.textContent = "Next Round";
	nextRoundButton.addEventListener("click", () => {
		// Clear WinnerScreen and Fields
		winnerWindow.style.display = "none";
		for (let i = 0; i < 9; i++) {
			allFields[i].classList.remove("main-signX");
			allFields[i].classList.remove("main-signO");
			allFields[i].textContent = "";
			board[i] = 0;
		}
	});
};
