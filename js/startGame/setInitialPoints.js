export const setInitialPoints = () => {
	// Get access to points
	const player1PointsField = document.querySelector("#player1Points");
	const tiePointsField = document.querySelector("#tiePoints");
	const player2PointsField = document.querySelector("#player2Points");

	// Set initial points in localStorage
	localStorage.setItem("player1", 0);
	localStorage.setItem("tie", 0);
	localStorage.setItem("player2", 0);
	player1PointsField.textContent = 0;
	tiePointsField.textContent = 0;
	player2PointsField.textContent = 0;
};
