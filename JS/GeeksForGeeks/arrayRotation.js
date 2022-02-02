//write a function rotate(arr, d, n) that rotates arr of size n by d elements
// arr= [1,2,3,4,5,6,7] n = 7, d = 2
// output [3,4,5,6,7,1,2]


const arrayRotation=(arr,d)=>{
    k = arr.slice(d) 
    let m = new Set(k)
    var diff = ([...arr].filter(x=>!m.has(x)))
    return k.concat(diff)
}

//2nd solution
const arr = [1,2,3,4,5,6,7], d = 3;
const newArr = [...arr.slice(d % arr.length), ...arr.slice(0, d % arr.length)];


console.log(arrayRotation([1,2,3,4,5,89,99,6,33],3))

//3rd solution with loops
