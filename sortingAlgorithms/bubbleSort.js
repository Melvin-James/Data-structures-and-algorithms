function bubbleSort(){
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]];
                swapped = true;
            }
        }
    }while(swapped)
    return array;
}
let array = [-6,20,8,4,-2];
console.log(bubbleSort(array));