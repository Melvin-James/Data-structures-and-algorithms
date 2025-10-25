//merge sort implementation - t(c) = O(nlogn)
// function mergeSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let mid = Math.floor(array.length/2);
//     let leftArr = array.slice(0,mid);
//     let rightArr = array.slice(mid);
//     return merge(mergeSort(leftArr),mergeSort(rightArr));
// }
// function merge(leftArr,rightArr){
//     let sortedArray = [];
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArray.push(leftArr.shift());
//         }else{
//             sortedArray.push(rightArr.shift());
//         }
//     }
//     return [...sortedArray,...leftArr,...rightArr];
// }
// let array = [-6,20,8,-2,4];
// console.log(mergeSort(array));

//sort an array using merge sort
// let array=[12,67,-9,23,-12];
// function mergeSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let mid = Math.floor(array.length/2);
//     let leftArray = array.slice(0,mid);
//     let rightArray = array.slice(mid);
//     return merge(mergeSort(leftArray),mergeSort(rightArray));
// }
// function merge(leftArray,rightArray){
//     let sortedArray = [];
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0]<=rightArray[0]){
//             sortedArray.push(leftArray.shift());
//         }else{
//             sortedArray.push(rightArray.shift());
//         }
//     }
//     return [...sortedArray,...leftArray,...rightArray];
// }
// console.log(mergeSort(array));

//sort a string using mergeSort
// let str = 'badec';
// function mergeSortString(str) {
//     if (str.length < 2) {
//         return str;
//     }

//     let mid = Math.floor(str.length / 2);
//     let left = str.slice(0, mid);
//     let right = str.slice(mid);

//     return merge(mergeSortString(left), mergeSortString(right));
// }
// function merge(left, right) {
//     let sorted = [];
//     left = left.split('');
//     right = right.split('');

//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sorted.push(left.shift());
//         } else {
//             sorted.push(right.shift());
//         }
//     }

//     return [...sorted, ...left, ...right].join('');
// }
// console.log(mergeSortString(str));

//mergeSort a linked list
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class linkedList{
//     constructor(value){
//         this.head = null;
//     }
//     insertAtEnd(value){
//         let node = new Node(value);
//         if(!this.head){
//             this.head = node;
//         }else{
//             let current = this.head;
//             while(current && current.next){
//                 current = current.next;
//             }
//             current.next = node;
//         }
//     }
//     printList(){
//         let result = '';
//         let current = this.head;
//         while(current){
//             result+=current.value+' -> ';
//             current = current.next;
//         }
//         console.log(result+'null');
//     }
//     mergeSort(){
        
//     }
// }
// const list = new linkedList();
// list.insertAtEnd(30);
// list.insertAtEnd(40);
// list.insertAtEnd(50);
// list.insertAtEnd(60);
// list.printList();

//mergeSort
// function mergeSort(array){
//     if(array.length < 2){
//         return array;
//     }
//     let mid = Math.floor(array.length/2);
//     let leftArray = array.slice(0,mid);
//     let rightArray = array.slice(mid);
//     return merge(mergeSort(leftArray),mergeSort(rightArray));
// }
// function merge(leftArray,rightArray){
//     let sortedArray=[];
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0]<=rightArray[0]){
//             sortedArray.push(leftArray.shift());
//         }else{
//             sortedArray.push(rightArray.shift());
//         }
//     }
//     return [...sortedArray,...leftArray,...rightArray];
// }
// let array = [12,67,-9,23,-12]
// console.log("Sorted array:",mergeSort(array));

//Sort string using merge sort
// function sortStringUsingMergeSort(str){
//     if(str.length<2){
//         return str;
//     }
//     let mid = Math.floor(str.length/2);
//     let leftArray = str.slice(0,mid);
//     let rightArray = str.slice(mid);
//     return merge(sortStringUsingMergeSort(leftArray),sortStringUsingMergeSort(rightArray));
// }
// function merge(leftArray,rightArray){
//     let sorted=[];
//     leftArray=leftArray.split('');
//     rightArray=rightArray.split('');
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0]<=rightArray[0]){
//             sorted.push(leftArray.shift());
//         }else{
//             sorted.push(rightArray.shift());
//         }
//     }
//     return [...sorted,...leftArray,...rightArray].join('');
// }
// console.log(sortStringUsingMergeSort('eadbc'));

//Sort array of objects by property
// const students = [
//   { name: "Melvin", age: 21 },
//   { name: "Arjun", age: 25 },
//   { name: "Jithin", age: 20 },
//   { name: "Bibin", age: 23 }
// ];
// function mergeSort(array,key){
//     if(array.length<2){
//         return array;
//     }
//     let mid = Math.floor(array.length/2);
//     let left = array.slice(0,mid);
//     let right = array.slice(mid);
//     return merge(mergeSort(left,key),mergeSort(right,key),key);
// }
// function merge(left,right,key){
//     let sorted=[];
//     while(left.length && right.length){
//         if(left[0][key]<=right[0][key]){
//             sorted.push(left.shift());
//         }else{
//             sorted.push(right.shift());
//         }
//     }
//     return [...sorted,...left,...right];
// }
// console.log(mergeSort(students,"age"));