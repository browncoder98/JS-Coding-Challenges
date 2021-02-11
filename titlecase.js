// Problem - 5: Write a function to return the first letter of each word in the given string Capitalized.


// Traditional ES5 solution:

function titleCase(str) {
	var words = str.toLowerCase().split(" ");
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");

}
console.log(titleCase("I'm a little tea pot"));

// Optimized Solution: ES6

const titleCase = (str) => {
	let titled = str.toLowerCase().split(" ").map(function (elem) {
		return elem[0].toUpperCase() + elem.slice(1);
	})

	return titled.join(" ");
}

console.log(titleCase("I'm a little tea pot"));