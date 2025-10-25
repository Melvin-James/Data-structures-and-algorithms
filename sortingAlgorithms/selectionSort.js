//selection sort implementation - t(c)=O(n^2)
// function selectionSort(array){
//     for(let i=0;i<array.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1;j<array.length;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex!==i){
//             [array[i],array[minIndex]]=[array[minIndex],array[i]];
//         }
//     }
//     return array;
// }
// let array = [8,7,9,2,3,1,5,4,6];
// console.log(selectionSort(array));

//implement selection sort
// function selectionSort(array){
//     for(let i=0;i<array.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1; j<array.length; j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex!==i){
//             [array[i],array[minIndex]]=[array[minIndex],array[i]];
//         }
//     }
//     return array;
// }
// let array = [-6,20,8,4,-2];
// console.log(selectionSort(array));

//sort an array using selection sort
// let array = [12,67,-9,23,-12];
// function selectionSort(array){
//     for(let i=0;i<array.length-1;i++){
//         let minIndex=i;
//         for(let j=i+1;j<array.length;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex!==i){
//             [array[i],array[minIndex]]=[array[minIndex],array[i]];
//         }
//     }
//     return array;
// }
// console.log(selectionSort(array));

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