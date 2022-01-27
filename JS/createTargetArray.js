const createTargetArray=(nums,index)=>{
    let p =[]
    for(let i=0; i<nums.length;i++){
        //splice does add and remove operations on an array
        p.splice(index[i],0,nums[i])
        
    }
    return p
}
console.log(createTargetArray([0,1,2,3,4],[0,1,2,3,0]))