import { winningCombination } from "./winnerFields.js";
import { allFields } from "./markFields.js";

export const markWinnerFields = (sign) => {
	for (let field of winningCombination) {
		if (sign === "X") {
			allFields[field].setAttribute("id", "winner-main-signX");
		} else if (sign === "O") {
			allFields[field].setAttribute("id", "winner-main-signO");
		}
	}
};
