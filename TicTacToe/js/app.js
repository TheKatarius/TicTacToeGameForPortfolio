document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		startGame();
	}
});

function startGame() {
	// If it is a first game on someone's computer - must click reset points to set initial localStorage variables
	const player1Check = localStorage.getItem("player1"); // null if does not exist
	const tieCheck = localStorage.getItem("tie");
	const player2Check = localStorage.getItem("player2");
	if (player1Check === null || tieCheck === null || player2Check === null) {
		alert(
			"It is your first game on your computer. Please click reset button to start the game."
		);
	}

	// Get the Data from LocalStorage
	let player1Points = Number(localStorage.getItem("player1"));
	let tiePoints = Number(localStorage.getItem("tie"));
	let player2Points = Number(localStorage.getItem("player2"));

	// Change the Points in Footer
	const player1Footer = document.querySelector("#player1Points");
	player1Footer.innerHTML = player1Points;
	const tieFooter = document.querySelector("#tiePoints");
	tieFooter.innerHTML = tiePoints;
	const player2Footer = document.querySelector("#player2Points");
	player2Footer.innerHTML = player2Points;

	// Reset Points
	const resetPoints = document.querySelector(".reset-points");
	resetPoints.addEventListener("click", () => {
		localStorage.setItem("player1", 0);
		localStorage.setItem("tie", 0);
		localStorage.setItem("player2", 0);
		player1Footer.innerHTML = 0;
		tieFooter.innerHTML = 0;
		player2Footer.innerHTML = 0;
	});

	// Reset the game by refreshing the page
	const resetButton = document.querySelector(".reset-button");
	resetButton.addEventListener("click", () => {
		location.reload();
	});

	// Display window of winner
	const displayWinner = (sign = 0) => {
		const removedBoard = document.querySelector(".board");
		removedBoard.style.display = "none";
		const winnerWindow = document.querySelector("#winnerWindow");
		winnerWindow.classList.add("winner-window");
		if (sign === "X") {
			winnerWindow.textContent = "Player1 Wins!";
			winnerWindow.style.color = "rgb(26, 217, 12)";
		} else if (sign === 0) {
			winnerWindow.textContent = "Tie!";
			winnerWindow.style.color = "rgb(192, 192, 192)";
		} else if (sign === "O") {
			winnerWindow.textContent = "Player2 Wins!";
			winnerWindow.style.color = "rgb(192, 39, 39)";
		}
	};

	// Check if winner exists
	const gameOver = (allFields, sign) => {
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
		if (
			allFields[0] === sign &&
			allFields[4] === sign &&
			allFields[8] === sign
		) {
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
		}

		// If tie
		const tie = board.indexOf(0);
		if (tie === -1) {
			localStorage.setItem("tie", ++tiePoints);
			tieFooter.innerHTML = tiePoints;
			displayWinner();
		}
	};

	// Mark symbol in particular field and change symbolTurn at the top
	const allFields = document.querySelectorAll(".board div");
	const signTurn = document.querySelector(".sign");
	let turn = "X";
	const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (let i = 0; i < 9; i++) {
		allFields[i].addEventListener("click", (event) => {
			// If turn is correct and the field is not occupied
			if (turn === "X" && board[i] === 0) {
				// Add class with properties
				event.target.classList.add("main-signX");
				event.target.innerHTML = "X";
				board[i] = turn;
				gameOver(board, turn);
				turn = "O";
			} else if (turn === "O" && board[i] === 0) {
				event.target.classList.add("main-signO");
				event.target.innerHTML = "O";
				board[i] = turn;
				gameOver(board, turn);
				turn = "X";
			}
			signTurn.innerHTML = turn;
		});
	}
}
