

const countKDifference=(nums, k)=>{
    let count = 0
    for(let i=0;i<nums.length;i++){
        for(let j=0; j<nums.length;j++){
            if(((nums[i]-nums[j]) === k || (nums[i]-nums[j]) === (-k)) && nums[i] !== nums[j]){
                count++
            }
            continue
        }
        
        
    }
    return count/2
}
