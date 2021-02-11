/* Problem 21: Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

*/

// Solution: Using the replace method -> excluding case sensitivity

function myReplace(str, before, after) {
	return str.replace(before, after)
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); // returns the same string replacing "jumped" with "leaped"


// Solution: Taking into consideration the case sensitivity

function myReplace(str, before, after) {
	if (before[0] === before[0].toUpperCase()) {
		after = after[0].toUpperCase() + after.slice(1);
	}

	return str.replace(before, after)
}

console.log("A quick brown fox Jumped over over the lazy dog", "Jumped", "leaped"); // here the "l" in "leaped" becomes capitalized


// Solution: Without using the replace method

function myReplace(str, before, after) {
	var words = str.split(" ");

	if (before[0] === before[0].toUpperCase()) {
		after = after[0].toUpperCase() + after.slice(1);
	}

	for (var i = 0; i < words.length; i++) {
		if (words[i] === before) {
			words[i] = after;
		}
	}

	return words.join(" ")
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));