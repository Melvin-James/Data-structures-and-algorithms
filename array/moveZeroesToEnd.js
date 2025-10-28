let array = [0, 1, 0, 3, 12]
function moveZeroesToEnd(array){
    let pos = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]!==0){
            array[pos]=array[i];
            pos++;
        }
    }
    for(let i=pos; i<array.length;i++){
        array[i]=0;
    }
    return array;
}
console.log(moveZeroesToEnd(array));

//Time - O(n)
//Space - O(1)