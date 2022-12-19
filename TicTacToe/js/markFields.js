export const allFields = document.querySelectorAll(".board div");
export const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export const markFields = (gameOver, turn) => {
	// Check the fields and check if not gameOver
	const signTurn = document.querySelector(".sign");
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
};
