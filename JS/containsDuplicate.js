//given an integer array nums, return true if any value appears at least
//twice in the array and return false if every element is distinct. 

const containsDuplicate=(nums)=>{
    let w = new Set(nums)
    if(w.size === nums.length){
        return false
    }
    return true

}

console.log(containsDuplicate([1,2,3,3,3]))