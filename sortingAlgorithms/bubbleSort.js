//Bubble sort implementation - t(c)=O(n^2)
// function bubbleSort(array){
//     let swapped;
//     do{
//         swapped=false;
//         for(let i=0;i<array.length-1;i++){
//             if(array[i]>array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped=true;
//             }
//         }
//     }while(swapped);
//     return array;
// }
// console.log(bubbleSort([12,3,56,34,21]));

//Implement bubble sort
// function bubbleSort(array){
//     let swapped;
//     do{
//         swapped = false;
//         for(let i=0;i<array.length-1;i++){
//             if(array[i]>array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped = true;
//             }
//         }
//     }while(swapped)
//     return array;
// }
// let array = [-6,20,8,-2,4];
// console.log(bubbleSort(array));

//bubble sort an array
// let array = [12,67,-9,23,-12];
// function bubbleSort(array){
//     let swapped;
//     do{
//         swapped=false;
//         for(let i=0;i<array.length;i++){
//             if(array[i]>array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped=true;
//             }
//         }
//     }while(swapped);
//     return array;
// }
// console.log('sorted array:',bubbleSort(array));

//bubbleSort using linked list
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null;
//     }
//     insert(values){
//         for(let i=0;i<values.length;i++){
//             let node = new Node(values[i]);
//             if(!this.head){
//                 this.head=node;
//             }else{
//                 let current = this.head;
//                 while(current && current.next){
//                     current = current.next;
//                 }
//                 current.next=node;
//             }
//         }
//     }
//     bubbleSort(){
//         let swapped;
//         do{
//             swapped=false;
//             let current = this.head;
//             while(current && current.next){
//                 if(current.value>current.next.value){
//                     let temp=current.value;
//                     current.value=current.next.value;
//                     current.next.value=temp;
//                     swapped=true;
//                 }
//                 current=current.next;
//             }
//         }while(swapped)
//     }
//     display(){
//         let current=this.head;
//         let result='';
//         while(current){
//             result+=current.value+' -> ';
//             current = current.next;
//         }
//         console.log(result+'null');
//     }
// }
// const list = new linkedList();
// const values = [90,45,34,67,56];
// list.insert(values);
// list.display();
// list.bubbleSort();
// list.display();

