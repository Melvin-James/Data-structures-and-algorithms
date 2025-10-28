let array = [1,3,5];
function appendElementAtBeg(value){
    for(let i=array.length;i>0;i--){
        array[i]=array[i-1];
    }
    array[0]=value;
    return array;
}
console.log(appendElementAtBeg(7));

//Time - O(n)
//Space - O(1)
