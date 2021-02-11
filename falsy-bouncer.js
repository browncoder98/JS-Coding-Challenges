/* Problem-13: Remove all falsy values from an array.

Falsy values in JavaScript are "false", "null", "0", " ", "undefined", and "NaN".

*/

// Solution:

function bouncer(arr) {
	var truthies = [];

	for (var elem of arr) {
		if (elem) truthies.push(elem);
	}

	return truthies;

}

console.log(bouncer([7, "ate", "", false, 9]))


// Solution with ES6 and filter function:

const bouncer = (arr) => {
	return arr.filter(function (elem) {
		return elem;
	});

}

bouncer([7, "ate", "", false, 9])

