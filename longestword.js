// Problem 4: Return the length of the longest word in the provided sentence. Your response should be a number.

// Traditional solution: ES5

function findLongestWord(str) {
	var words = str.split(" ");
	var longest = "";

	for (var word of words) { // Iterating through each elements of the words array 
		if (word.length > longest.length) longest = word;
	}
	return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// One line solution using Es6 and sort function in JavaScript:

const findLongestWord = (str) => {

	return str.split(" ").sort(function (a, b) { return b.length - a.length })[0].length;

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))