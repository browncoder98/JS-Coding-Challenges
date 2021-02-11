/* Problem - 14: You will be provided with an intial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

//Solution: 

function destroyer(arr) {
	var args = Array.from(arguments);

	args.splice(0, 1);
	var targets = args;
	var result = []

	for (var num of arr) {
		if (targets.indexOf(num) === -1) {
			result.push(num);
		}
	}

	return result;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // returns [1,1]

// Solution with filter method:

function destroyer(arr) {
	var args = Array.from(arguments);

	args.splice(0, 1);
	var targets = args;

	return arr.filter(function (num) {
		return !targets.includes(num);
	})
}