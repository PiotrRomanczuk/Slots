const prompt = require('prompt-sync')();

const deposit = () => {
	while (true) {
		const depositAmount = prompt('Enter a deposit amount: ');
		const numberDepositAmount = parseFloat(depositAmount);

		if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
			console.log('Invalid deposit amount');
		} else {
			return numberDepositAmount; // Return the valid deposit amount
		}
	}
};

const getNumberOfLines = () => {
	while (true) {
		const lines = prompt('Enter the number of lines to bet on (1-3): ');
		const numberOfLines = parseInt(lines);

		if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3) {
			console.log('Invalid number of lines');
		} else return numberOfLines;
	}
};

const getBet = (balance, lines) => {
	while (true) {
		const bet = prompt('Enter the bet per line: ');
		let betAmount = parseInt(bet);

		if (isNaN(betAmount) || betAmount < 1 || betAmount > balance / lines) {
			console.log('Invalid bet amount');
		} else return betAmount;
	}
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);

// console.log(depositAmount);
