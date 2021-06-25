/** Given a multi-dimensional integer array, return the total number of integers, stored inside this array.
 *  [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. 
     This is because the array contains 7 integers. */
function realSize(arrays, n=0) {
  for (let i = 0; i < arrays.length; i++) {
	  if (typeof arrays[i] === "number"){
	    n ++;
	  } else if (typeof arrays[i] === "object"){
	    n = realSize(arrays[i], n); 
	  }
  }
  return n;
 }
 
/** Take numbers from array (have to account for nested arrays) and sum the sqare of each number */
function sumSquares(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
	  if (typeof arr[i] === "number"){
	    total += ((arr[i])**2);
	  } else if (typeof arr[i] === "object"){
	    total += sumSquares(arr[i]); 
	  }
    console.log(i, total);
  }
  return total;
}

// other method 
function SumSquares(arr) {
  let total = 0;
  for (let num of arr) {
    if (Array.isArray(num)) {
      total += SumSquares(num);
    } else {
      total += num ** 2;
    }
  }
  return res;
}
/*You need to design a recursive function called replicate which will receive arguments times and number.
For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
*/
function replicate(times, num, i=0) {
  let arr = []; 
	if (times <= 0) return [];

  if (i < times) {
    arr = [num, ...replicate(times, num, i + 1)]
  }
  return arr;
}

// other method 
const replicate = (times, number) =>
  times > 0 ? [number, ...replicate(--times, number)] : [];