// Given an array of integers, return the indices of the two numbers that add up to a given target

// [1, 3, 7, 9, 2]    -> 11

// 1. Verify the constraints

// 1.1. Are all the numbers positive or can there be negatives?
// R: All numbers are positive.

// 1.2. Are there duplicates numbers in the array?
// R: No, there are no duplicates

// 1.3. Will there always be a solution available?
// R: No, there may not always be a solution

// 1.4. What do we return if there is no solution?
// R: Just return null

// 1.5. Can there be multiple pairs that add up to the target?
// R: No, only 1 pair of numbers will add up to the target.

// 2. Write out some test cases

// 2.1. [1, 3, 7, 9, 2],   t = 11, [3, 4]

// 2.2. [1, 3, 7, 9, 2], t = 25, null

// 2.3. [],     t = 1,     null

// 2.4. [5],     t = 5,    null

// 2.5. [1, 6],    t = 7,    [0, 1]


// 3. Figure out a solution without code

// MY FIRST APPROACH
const arr = [1, 3, 7, 9, 2];

// const twoSum = (arr, target) => {
//     if(arr.length < 2) return null;

//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//        for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 result = [i, j];
//             } else {
//                 result = null;
//             }
//        }
//     }
//     return result;
// }

// 4. Test our code with the test cases
// console.log(twoSum(arr, 11)) // GOOD
// console.log(twoSum(arr, 25)) // GOOD
// console.log(twoSum([], 1)) // GOOD
// console.log(twoSum([5], 5)) // GOOD
// console.log(twoSum([1, 6], 7)); // GOOD

// 5. Analyzing Space & Time Complexity
// O(n2) =>  Time Complexity
// O(1) => Space Complexity

// 6. Optimizing the solution
const twoSum = (arr, target) => {
    if(arr.length < 2) return null;

    const numsMap = {};
    
    for(let i = 0; i < arr.length; i++) {
       const currentMapVal = numsMap[arr[i]];
       if(currentMapVal >= 0) {
        return [currentMapVal, i];
       } else {
        const numberToFind = target - arr[i];
        numsMap[numberToFind] = i;
       }
    }
    return null;
}

console.log(twoSum(arr, 11)) // GOOD
// console.log(twoSum(arr, 25)) // GOOD
// console.log(twoSum([], 1))  // GOOD
// console.log(twoSum([5], 5)) // GOOD
// console.log(twoSum([1, 6], 7)); // GOOD

// 7. Analyzing Space & Time Complexity
// O(n) =>  Time Complexity
// O(n) => Space Complexity
