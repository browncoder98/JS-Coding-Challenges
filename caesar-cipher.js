/* Problem 16: Caesars Cipher

One of the simplest and most widely known 'cipher' is a 'Caesar Cipher', also known as 'shift cipher'. In a 'shift cipher' the meanings of the letters are shifted by some set amount.

A common modern use is the 'ROT13' cipher where the values of the letter are shifted by 13 places. Thus 'A' <-> 'N', 'B'<->'O' and so on.

Write a function which takes a 'ROT13' encoded string as input and returns a decoded string.

All the letters will be uppercase. Do not transform any non-alphabetic character(i.e. spaces, punctuation), but do pass them on.


*/

//Solution: 

function rot13(str) { // LBH QVQ VG!
	var solved = "";
	for (var i = 0; i < str.length; i++) {
		var asciiNum = str[i].charCodeAt();
		if (asciiNum >= 65 && asciiNum <= 77) {
			solved += String.fromCharCode(asciiNum + 13);
		} else if (asciiNum >= 78 && asciiNum <= 90) {
			solved += String.fromCharCode(asciiNum - 13);
		} else {
			solved += str[i];
		}
	}
	return solved
}

console.log(rot13("SERR PBQR PNZC")); // returns the string "FREE CODE CAMP"

//["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(rot13("A"))