export const displayWinner = (sign = 0) => {
	// Remove Reset Button After Win
	const resetButton = document.querySelector(".reset-button");
	resetButton.remove();

	setTimeout(() => {
		const winnerWindow = document.querySelector("#winnerWindow");
		winnerWindow.style.display = "flex";
		winnerWindow.classList.add("winner-window");
		winnerWindow.firstElementChild.classList.add("winner-window-buttons");
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
			// Removing WinnerString Occurs Error For the Second Time, bcs It Does Not Detect winnerString
			winnerWindow.innerHTML =
				'<div><div id="quitButton"></div><div id="nextRoundButton"></div></div>';

			// Add resetButton and Click It
			const header = document.querySelector(".header");
			header.appendChild(resetButton);
			resetButton.click();
			winnerWindow.style.display = "none";
		});
	}, 2000);
};
