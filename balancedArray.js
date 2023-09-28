
/**
 * Balanced Array
 *
 * (arr[i] += arr[i+1]) === (arr[i+j] += arr[lengthArr]) return true
 *
 * e.g arr = [2, 8, 4, 5, 1];
 *
 * let end = arr.length - 1;
 * ? arr[0] === arr[1] + arr[2] + .. + arr[end]
 * ? arr[0] + arr[1] === arr[2] + .. + arr[end]
 * ? arr[0] + arr[1] + arr[2] === arr[3] + .. + arr[end]
 * ? arr[0]+ .. +arr[end - 1] === arr[end]
 *
 * arr[0] === r: 1 - end, sumRight +=arr[r]
 * arr[0] + arr
*/


//

function isBalancedArr(arr){

	if (arr.length < 2) return false;

	let lengthArr = arr.length;
	let sumLeft = 0;
	let sumRight = 0;

	for (let l = 0; l < lengthArr - 1; l++){
		sumLeft += arr[l];
		sumRight = 0;
		for(let r = l + 1; r < lengthArr; r++){
			sumRight += arr[r];
		}
		if (sumLeft === sumRight) return true;
	}
	return false;
}

let arr1 = [2, 8, 4, 5, 1];
let arr2 = [];
let arr3 = [1, 2, 5, 2, 4, 2, 4];
let arr4 = [1, 2, 6, 2, 4, 2, 4];

console.log(`arr1: ${isBalancedArr(arr1)}`);
console.log(`arr2: ${isBalancedArr(arr2)}`);
console.log(`arr3: ${isBalancedArr(arr3)}`);
console.log(`arr4: ${isBalancedArr(arr4)}`);