function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let numberToInsert = array[i];
        let j=i-1;
        while(j>=0 && array[j]>numberToInsert){
            array[j+1]=array[j];
            j=j-1;
        }
        array[j+1]=numberToInsert;
    }
    return array;
}
let array = [-6,20,4,8,-2];
console.log(insertionSort(array));