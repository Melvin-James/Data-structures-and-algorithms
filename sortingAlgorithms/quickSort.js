//quick sort implementation 
// function quickSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let pivot = array[array.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i]);
//         }else{
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left), pivot ,...quickSort(right)];
// }
// let array = [8,20,-2,4,-6];
// console.log(quickSort(array));

//implement quick sort
// function quickSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let pivot = array[array.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i]);
//         }else{
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// let array = [8,20,-2,4,-6];
// console.log(quickSort(array));

//sort an array using quick sort
// let array = [12,67,-9,23,-12]
// function quickSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let pivot=array[array.length-1];
//     let left=[];
//     let right=[];
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i]);
//         }else{
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// console.log(quickSort(array));

//quickSort
// function quickSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let pivot = array[array.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i]);
//         }else{
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// let array = [12,67,-9,23,-12];
// console.log(quickSort(array));

//Sort array alphabetically using quick sort
// function alphaQuickSort(alpha){
//     if(alpha.length<2){
//         return alpha;
//     }
//     let pivot = alpha[alpha.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0;i<alpha.length-1;i++){
//         if(alpha[i]<pivot){
//             left.push(alpha[i]);
//         }else{
//             right.push(alpha[i]);
//         }
//     }
//     return [...alphaQuickSort(left),pivot,...alphaQuickSort(right)];
// }
// let alpha = ['d','e','a','b'];
// console.log(alphaQuickSort(alpha));
