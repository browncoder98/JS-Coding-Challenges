/* Problem - 1: Reverse the string "hello". The console should log "olleh" */

// Initial Solution:

function reverseString(str) {
	var strArr = str.split("");
	var reverseStrArr = strArr.reverse();
	var reverseString = reverseStrArr.join("");
	return reverseString;
}

console.log(reverseString("hello")); // olleh

// Optimized Solution:

const reverseString = (str) => {
	return str.split("").reverse().join("");
}

console.log(reverseString("soap")); // paos


// Solving the problem without inbuilt functions such as split, reverse or join:

function reverseString(str) {
	var final = ""
	for (var i = str.length - 1; i >= 0; i--) {
		final += str[i];
	}
	return final;
}

console.log(reverseString("peep")) // peep