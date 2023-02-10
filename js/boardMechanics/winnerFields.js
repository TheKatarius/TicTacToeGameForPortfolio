export const winningCombination = [];
export const winnerFields = (board, sign) => {
	let win = false;
	// [0,3,6], [1,4,7], [2,5,8]
	for (let i = 0; i < 3; i++) {
		if (board[i] === sign && board[i + 3] === sign && board[i + 6] === sign) {
			winningCombination.push(i, i + 3, i + 6);
			win = true;
		}
	}
	// [0,1,2], [3,4,5], [6,7,8]
	for (let i = 0; i < 9; i += 3) {
		if (board[i] === sign && board[i + 1] === sign && board[i + 2] === sign) {
			winningCombination.push(i, i + 1, i + 2);
			win = true;
		}
	}
	// [0,4,8]
	if (board[0] === sign && board[4] === sign && board[8] === sign) {
		winningCombination.push(0, 4, 8);
		win = true;
	}
	// [2,4,6]
	else if (board[2] === sign && board[4] === sign && board[6] === sign) {
		winningCombination.push(2, 4, 6);
		win = true;
	}
	return win;
};
