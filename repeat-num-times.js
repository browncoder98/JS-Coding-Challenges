/* Problem - 8: Repeat a given string (first argument) "num" times (second argument). Return an empty string if "num" is not a positive number.*/



// Solution using the "repeat" method in ES6

const repeatStringNumTimes = (str, num) => {
	if (num < 0) return "";
	return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"

// Es6 with for loop

const repeatStringNumTimes = (str, num) => {
	let final = "";
	if (num < 0) return "";
	for (let i = 0; i < num; i++) {
		final += str;
	}
	return final;
}

console.log(repeatStringNumTimes("abc", 5)); // "abcabcabcabcabc"

// Solution with ES6 and recursion

const repeatStringNumTimes = (str, num) => {
	if (num < 0) return "";
	if (num === 1) return str; // base case

	return str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes("abc", 3))



