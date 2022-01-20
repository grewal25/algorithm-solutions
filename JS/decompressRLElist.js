const decompressRLElist =(nums)=>{
    let m = []
     for(let i=0; i<nums.length;i++){
        if(i%2 === 0){
            p  = new Array(nums[i])
            p.fill(nums[i+1])
            m = m.concat(p)
        }
        continue; 
     }
     return m
}

//2nd solution, two pointer
var decompressRLElist = function (nums) {
  let ans = [];
  let l = 0,
    r = l + 1;
  while (r < nums.length) {
    for (let i = 0; i < nums[l]; i++) {
      ans.push(nums[r]);
    }

    l += 2;
    r += 2;
  }

  return ans;
};

//3rd solution
const decompressRLElist = (nums) => {
    const result = [];
    let freq
    let val
    
    nums.forEach((num, index) => {
      const isOdd = index % 2 === 0;
  
      if(isOdd) {
        freq = num;
      } else {
        val = num;  
      };
      
      if(freq && val) {
        for(let i= 0; i < freq; i++) {
          result.push(val);
        };
        
        freq = undefined;
        val = undefined;
      };
  
    });
    
    return result;
  };