/* Problem-18: Diff Array

Compare two arrays and return a new array with new array with any items only found in one of the two given arrays, but not both, in other words, return the symmetric difference of the two arrays.

*/

// Solution: With simple for loops

function diffArray(arr1, arr2) {
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			result.push(arr1[i]);
		}
	}

	for (var j = 0; j < arr2.length; j++) {
		if (arr1.indexOf(arr2[j]) === -1) {
			result.push(arr2[j]);
		}
	}

	return result;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) // should return an array [4] since 4 is the unique value in both the arrays
console.log(diffArray([1, 2, 3], [4, 3, 6])) // returns [1, 2, 4, 6] since those are the uncommon values in both the arrays


// Solution: Using filter method 

function diffArray(arr1, arr2) {
	var combo = arr1.concat(arr2) // joins both the arrays

	return combo.filter(function (num) {
		if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
			return num;
		}
	});
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));