// Problem 3: Write a function that detects palindromes. (Words such as racecar is a palindrome because you get the same word when you reverse it). What needs to be noted is that non alpha numeric characters will be avoided by the function (*, _ -> examples of non alpha numeric characters) and the function should be able to turn everything to lower case to check for palindromes before being executed

function palindrome(str) {
	var reg = /[\W/]/g; // using regular expressions for pattern detection for non alpha numericals
	var smallStr = str.toLowerCase().replace(reg, "");

	var reversed = smallStr.split("").reverse().join("");
	if (reversed === smallStr) return true;

	return false;
}

console.log(palindrome("racecar9"));