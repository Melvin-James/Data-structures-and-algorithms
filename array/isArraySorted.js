function isSorted(input){
    for(let i=0;i<input.length;i++){
        if(input[i]>input[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 3, 2, 4, 5]));