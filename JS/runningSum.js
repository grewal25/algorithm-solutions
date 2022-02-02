

const runningSum=(nums)=>{
    let m = []
    let sum = 0
    for(let i=0;i<nums.length;i++){
         sum = nums[i]+sum
        m.push(sum)
        
    }
    return m
}

console.log(runningSum([1,2,3,4]))

//2nd solution , recursive
var runningSum = function (nums) {
    if (nums.length === 1) return nums;
    var res = runningSum(nums.slice(0, -1));
    var sum = res.slice(-1)[0] + nums.slice(-1)[0];
    res.push(sum);
    return res;
};