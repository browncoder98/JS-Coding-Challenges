/* Problem - 10: Write a function that splits an array(first argument) into groups the length of "size" (second argument) and returns them as a two dimensional array.
*/

// Solution: Using the slice method

function chunkArrayInGroups(arr, size) {
	var groups = [];
	while (arr.length > 0) {
		groups.push(arr.slice(0, size));
		arr = arr.slice(size);

	}
	return groups;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// Solution in ES6 using the splice method:

const chunkyArrayInGroups = (arr, size) => {
	let groups = [];
	while (arr.length > 0) {
		groups.push(arr.splice(0, size));
	}
	return groups;


}

console.log(chunkyArrayInGroups(["a", "b", "c", "d"], 3))