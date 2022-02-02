
//return all odd subarrays of an array

const sumOddLengthSubarrays=(arr)=>{
    let k = arr.length 
    let m = []
    for(let i=0; i<k;i++){
         for(let j=1; j<k;j++){
             m.push(arr[i])
            console.log(arr[i])
         }
    }
    return m

}
console.log(sumOddLengthSubarrays([1,4,2,5,3]))


// if(k % 2 !== 0){
//     if(k=== 1){
//         return 1
//     }
//     for(let i = 0; i<k;i++){

//     }
// }