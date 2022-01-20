
const convertInteger = (n)=>{
    let s = {}
    for( let i=0; i<n.length+1; i++){
        s[i] = i; 
    }
    return s;
}
    
console.log(convertInteger([1,2,3]))
