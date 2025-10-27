function selectionSort(array){
    for(let i=0;i<array.length-1;i++){
        let minIndex = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            [array[i],array[minIndex]]=[array[minIndex],array[i]];
        }
    }
    return array;
}
let array = [12,-9,3,-21,23];
console.log(selectionSort(array));