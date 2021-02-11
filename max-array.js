// Simple Function to find the greatest number within a given array:

function findMax(arr) {
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	return max;
}

console.log(findMax([11, 24, 28, 76]))