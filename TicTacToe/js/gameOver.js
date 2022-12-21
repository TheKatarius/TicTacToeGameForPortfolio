import { displayWinner } from "./displayWinner.js";

export const gameOver = (allFields, sign) => {
	// Get the Data from LocalStorage
	let player1Points = Number(localStorage.getItem("player1"));
	let tiePoints = Number(localStorage.getItem("tie"));
	let player2Points = Number(localStorage.getItem("player2"));
	const player1Footer = document.querySelector("#player1Points");
	const tieFooter = document.querySelector("#tiePoints");
	const player2Footer = document.querySelector("#player2Points");

	let win = false;
	// [0,3,6], [1,4,7], [2,5,8]
	for (let i = 0; i < 3; i++) {
		if (
			allFields[i] === sign &&
			allFields[i + 3] === sign &&
			allFields[i + 6] === sign
		) {
			win = true;
		}
	}
	// [0,1,2], [3,4,5], [6,7,8]
	for (let i = 0; i < 9; i += 3) {
		if (
			allFields[i] === sign &&
			allFields[i + 1] === sign &&
			allFields[i + 2] === sign
		) {
			win = true;
		}
	}
	// [0,4,8]
	if (allFields[0] === sign && allFields[4] === sign && allFields[8] === sign) {
		win = true;
	}
	// [2,4,6]
	else if (
		allFields[2] === sign &&
		allFields[4] === sign &&
		allFields[6] === sign
	) {
		win = true;
	}
	// Print Winner!
	if (win) {
		if (sign === "X") {
			localStorage.setItem("player1", ++player1Points);
			player1Footer.innerHTML = player1Points;
			displayWinner("X");
		} else if (sign === "O") {
			localStorage.setItem("player2", ++player2Points);
			player2Footer.innerHTML = player2Points;
			displayWinner("O");
		}
	} else {
		// If tie
		const tie = allFields.indexOf(0);
		if (tie === -1) {
			localStorage.setItem("tie", ++tiePoints);
			tieFooter.innerHTML = tiePoints;
			console.log("gameOver");
			displayWinner();
		}
	}
};
