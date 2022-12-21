import { allFields, board } from "./markFields.js";

// Display window of winner
export const displayWinner = (sign = 0) => {
	console.log("displayWinner1");
	const winnerWindow = document.querySelector("#winnerWindow");
	winnerWindow.classList.add("winner-window");
	const winnerString = document.createElement("p");
	if (sign === "X") {
		winnerString.textContent = "X Wins!";
		winnerString.style.color = "rgb(26, 217, 12)";
	} else if (sign === 0) {
		console.log();
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
		winnerWindow.classList.remove("winner-window");
		winnerWindow.removeChild(winnerString);
		// Remove quit button class
		winnerWindow.firstElementChild.firstElementChild.classList.remove(
			"quit-button"
		);
		// Remove next reound button class
		winnerWindow.firstElementChild.lastElementChild.classList.remove(
			"next-round-button"
		);
		for (let i = 0; i < 9; i++) {
			allFields[i].classList.remove("main-signX");
			allFields[i].classList.remove("main-signO");
			allFields[i].textContent = "";
			board[i] = 0;
		}
	});
};
