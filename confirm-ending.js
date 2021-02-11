/* Problem - 7: Check if a string (first argument, str) ends with the given taget string (second argument, target). */


// Simple solution using the "endsWith" method in JavaScript:

function confirmEnding(str, target) {
	if (str.endsWith(target)) {
		return true;
	}
	return false;
}

console.log(confirmEnding("Bastian", "n")) // True

// One line solution:

function confirmEnding(str, target) {
	return str.endsWith(target);
}

console.log(confirmEnding("Bastian", "n")); // True

// Using the substring method in JavaScript:

const confirmEnding = (str, target) => {
	console.log("=>>" + str.substr(-target.length));
	if (str.substr(-target.length) === target) {
		return true;
	}
	return false;
}

console.log(confirmEnding("Bastian", "noo"));

// One line solution with substring (substr) method:

const confirmEnding = (str, target) => {
	return str.substr(-target.length) === target;
}

console.log(confirmEnding("Bastian", "noo");