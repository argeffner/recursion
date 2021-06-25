/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (nums.length === i) return 1;
  // console.log(nums[i] * product(nums, i+1))
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long=0) {
  if (words.length === i) return long;
  // check each word compare and store longest length per word iteration
  long = Math.max(words[i].length, long);
  return longest(words, i + 1, long);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr = '') {
// there is a possibility that i might be longer than str.length
  if (i >= str.length) return newStr;
  newStr += str[i];
  return everyOther(str, i+2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let ri = str.length - 1 - i;
  //checks for first half to make sure its true;
  if (str[i] !== str[ri]) {
    console.log(str[i], str[ri]);
    return false; }
  //once it passes halfway point then its true (mirror check)
  if (i >= ri) {
    console.log(str[i], str[ri]);
    return true; }
  return isPalindrome(str, i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, newStr = '') {
  if (i === str.length) return newStr;
  newStr += str[str.length - 1 - i];
  return revString(str, i + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // not sure how to make O(1) 
  let strArr = [];
  for (let key in obj) {
    // instanceof requires the use of constructers from classes use typeof instead
    if (typeof obj[key] === 'string') {
      strArr.push(obj[key])
    }
    if (typeof obj[key] === 'object') {
      strArr.push(...gatherStrings(obj[key]))
    }
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right = arr.length - 1 ) {
  if (right < left) return -1;
  let mid = Math.floor((right + left)/2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
