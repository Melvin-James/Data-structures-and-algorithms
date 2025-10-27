function moveZeroesToEnd(array){
    let insertPos = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]!==0){
            array[insertPos]=array[i];
            insertPos++;
        }
    }
    for(let i=insertPos;i<array.length;i++){
        array[i]=0;
    }
    return array;
}
let array = [0,1,0,3,12];
console.log(moveZeroesToEnd(array));
// Time O(n) Single pass through array
// Space O(1) In-place operation
