/*Problem-17: Sum All Numbers in a Range */

//Solution:

function sumAll(arr) {
	var start = Math.min(arr[0], arr[1])
	var end = Math.max(arr[0], arr[1])
	var total = 0;

	for (var i = start; i <= end; i++) {
		total += i;
	}
	return total;
}

// sumAll([1, 4]); // returns 10 -> (1+2+3+4 = 10)
// sumAll([4, 1]); // should return 10 as well (4 + 3 + 2 + 1 = 10)
console.log(sumAll([5, 10]));