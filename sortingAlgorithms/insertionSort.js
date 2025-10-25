//insertion sort implementation - t(c)=O(n^2)
// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let nti = array[i];
//         j=i-1;
//         while(j>=0 && array[j]>nti){
//             array[j+1]=array[j];
//             j--;
//         }
//         array[j+1]=nti;
//     }
//     return array;
// }
// let array = [-6,20,8,-2,4];
// console.log(insertionSort(array));

//implement insertion sort
// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let nti = array[i];
//         let j = i-1;
//         while(j>=0 && array[j]>nti){
//             array[j+1]=array[j];
//             j--;
//         }
//         array[j+1]=nti;
//     }
//     return array;
// }
// let array = [-6,20,8,-2,4];
// console.log(insertionSort(array));

//sort an array using insertion sort
let array = [12,67,-9,23,-12];
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
console.log('Sorted array:',insertionSort(array));

