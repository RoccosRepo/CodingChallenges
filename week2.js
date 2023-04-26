/* 
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples:

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
*/

function minMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `The minimum number in the array is ${min}, the maximum number in the array is ${max}.`;
};

let nums = [1, 2, 3, 4, 5];

console.log(minMax(nums));



function minMaxTwo(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
};

let numsTwo = [26, 467, 83, 636, 28];

console.log(minMaxTwo(numsTwo));