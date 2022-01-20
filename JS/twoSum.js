// const map1 = new Map()

// map1.set('a',1)

// console.log(map1.get('a'))

var twoSum = function(nums, target) {
	// Initialize an empty object to be our map
    const numMap = {};
    
	// Iterate over an array of numbers 0 -> n
    for (let i = 0; i < nums.length; i++) {
		// Bind the current number
        let num = nums[i];
		
		// Check if `(target - num)` corresponds to an index in our map
        if ((target - num) in numMap) {
			// If it does, break out of the loop and return its index and our current index
            return [numMap[(target - num)], i]
        }
		
		// Otherwise store the index of our current number are `num: i`
        numMap[num] = i;
        console.log(numMap)
        console.log("target-num is ",(target - num) )
    } 
}

console.log(twoSum([1,2,3,7,12,11,15], 9))