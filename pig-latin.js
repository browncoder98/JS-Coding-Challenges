// /* Problem 22: Pig Latin - Translate the provided string to pig Latin */


// // Solution: Using Regex in JS

// function translatePigLatin(str) {
// 	var firstVowel = str.match(/[aeiou]/);
// 	var firstPosition = str.indexOf(firstVowel);

// 	if (firstPosition > 0) {
// 		return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';

// 	}
// 	return str + "way";
// }

// console.log(translatePigLatin("consonant"))

// Solution: Without Regex

function translatePigLatin(str) {

	var firstPosition = findFirstVowelPosition(str);
	if (firstPosition > 0) {
		return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';

	}
	return str + "way";
}

function findFirstVowelPosition(str) {
	for (var i = 0; i < str.length; i++) {
		if ("aeiou".indexOf(str[i]) !== -1) {
			return i;
		}
	}
}

console.log(translatePigLatin("consonant"))