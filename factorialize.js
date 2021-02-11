/* Problem 2: Write a function to find the factorial of a number */

// ES5 Solution:

function factorialize(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result = result * i;
	}
	return result;
}


console.log(factorialize(4)) // 24
console.log(factorialize(5)) // 120

// Es6 solution:

const factorialization = (num) => {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

console.log(factorialization(6)) // 720
console.log(factorialization(7)) // 5040