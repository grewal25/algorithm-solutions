

const isSubArray=(A,B)=>{
    var n = A.length
    var m = B.length
    var i=0, j=0;

    while(i<n && j<m){
        if(A[i] === B[j]){
            i++;
            j++

            if(j === m){
                return true
            }
        }
        else{
            i = i-j+1
            j=0
        }
    }
    return false
}

console.log(isSubArray([2, 3, 0, 5, 1, 1, 2],[3, 0, 5, 1 ]))