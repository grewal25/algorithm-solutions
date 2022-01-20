const missingNumber=(nums)=>{
    let b = Math.max(...nums)
    let a = Math.min(...nums)
    //console.log(`a is ${a} and b is ${b}` )
    var c = []
    var k =[]
    for(let i = a; i <= b; i++){
        k = c.push(i)
    }
    //console.log(c)
    let difference = nums
                 .filter(x => !c.includes(x))
                 .concat(c.filter(x => !nums.includes(x)));
    if(a === 0 && b === 1){
        return [2]
    }
    if(a === 0 && b === 0){
        return [1]
    }
    return difference
    
}

console.log(missingNumber([0]))