//1. Bubble Sort — “Compare and Swap”
//Problem 1 — Sort numbers in ascending order
// let array =[5, 1, 4, 2, 8];
// function sortArrayAscending(array){
//     let swapped;
//     do{
//         swapped=false;
//         for(let i=0;i<array.length-1;i++){
//             if(array[i]>array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped=true;
//             }
//         }
//     }while(swapped)
//     return array;
// }
// console.log(sortArrayAscending(array));

//Problem 2 — Sort numbers in descending order
// let array =[5, 1, 4, 2, 8];
// function sortArrayDescending(array){
//     let swapped;
//     do{
//         swapped=false;
//         for(let i=0;i<array.length-1;i++){
//             if(array[i]<array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped=true;
//             }
//         }
//     }while(swapped)
//     return array;
// }
// console.log(sortArrayDescending(array));

//Problem 3 — Count total swaps performed
// let array=[4, 3, 2, 1];
// function totalSwaps(array){
//     let swapped;
//     let count=0;
//     do{
//         swapped=false;
//         for(let i=0;i<array.length-1;i++){
//             if(array[i]>array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped=true;
//                 count++;
//             }
//         }
//     }while(swapped)
//     return count;
// }
// console.log('Total swaps performed:',totalSwaps(array));

//2. Merge Sort — “Divide, sort, and merge”
//Problem 1 — Sort numbers
// let array = [38, 27, 43, 3, 9, 82, 10];
// function sortArray(array){
//     if(array.length<2){
//         return array;
//     }
//     const mid = Math.floor(array.length/2);
//     let left = array.slice(0,mid);
//     let right = array.slice(mid);
//     return merge(sortArray(left),sortArray(right));
// }
// function merge(left,right){
//     let sortedArray=[];
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortedArray.push(left.shift());
//         }else{
//             sortedArray.push(right.shift());
//         }
//     }
//     return [...sortedArray,...left,...right];
// }
// console.log(sortArray(array));

//Problem 2 — Sort characters of a string
// let str = "melvin"
// function sortString(str){
//     if(str.length<2){
//         return str;
//     }
//     const mid = Math.floor(str.length/2);
//     const left = str.slice(0,mid);
//     const right = str.slice(mid);
//     return merge(sortString(left),sortString(right));
// }
// function merge(left,right){
//     let sorted=[];
//     left=left.split('');
//     right=right.split('');
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift());
//         }else{
//             sorted.push(right.shift());
//         }
//     }
//     return [...sorted,...left,...right].join('');
// }
// console.log('sorted string:',sortString(str));

//Problem 3 — Merge two already sorted arrays
// let array1 = [1,3,5];
// let array2 = [2,4,6];
// function mergeTwoArrays(array1,array2){
//     let sorted = [];
//     while(array1.length && array2.length){
//         if(array1[0]<=array2[0]){
//             sorted.push(array1.shift());
//         }else{
//             sorted.push(array2.shift());
//         }
//     }
//     return[...sorted,...array1,...array2];
// }
// console.log(mergeTwoArrays(array1,array2));

//3. Quick Sort — “Divide by pivot”
//Problem 1 — Basic quick sort implementation
// let array = [10, 7, 8, 9, 1, 5];
// function quickSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let pivot = array[array.length-1];
//     let left =[];
//     let right=[];
//     for(i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i]);
//         }else{
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// console.log(quickSort(array));

//Problem 2 — Sort negative and positive numbers
// let array = [0, -1, 4, -10, 8, -5];
// function quickSort(array){
//     if(array.length<2){
//         return array;
//     }
//     let pivot = array[array.length-1];
//     let left = [];
//     let right =[];
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

//Problem 3 — Find median using quick sort
// let array = [7, 1, 3, 9, 5];
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
// function findMedian(array){
//     let sorted = quickSort(array);
//     let n= sorted.length;
//     let median;
//     if(n%2!==0){
//         return sorted[Math.floor(n/2)];
//     }else{
//         return (sorted[n/2-1]+sorted[n/2])/2;
//     }
// }
// console.log('median of the sorted array:',findMedian(array));

//4. Selection Sort — “Select the minimum and place it first”
//Problem 1 — Sort array of numbers
// let array = [64, 25, 12, 22, 11];
// function selectionSort(array){
//     for(let i=0;i<array.length;i++){
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
// console.log(selectionSort(array));

//Problem 2 — Find the k-th smallest element
// let array = [10, 4, 3, 7, 1, 9];
// function kthSmallest(array,k){
//     for(let i=0;i<k;i++){
//         let minIndex = i;
//         for(let j=i+1;j<array.length;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j;
//             }
//         }
//         [array[i],array[minIndex]]=[array[minIndex],array[i]];
//     }
//     return array[k-1];
// }
// console.log('kth smallest in array',kthSmallest(array,3));

//Problem 3 — Sort strings alphabetically
// let fruits = ["banana", "apple", "cherry", "date"];
// function sortStrings(fruits){
//     for(let i=0;i<fruits.length-1;i++){
//         let minIndex = i;
//         for(j=i+1;j<fruits.length;j++){
//             if(fruits[j]<fruits[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex!==i){
//             [fruits[i],fruits[minIndex]]=[fruits[minIndex],fruits[i]];
//         }
//     }
//     return fruits;
// }
// console.log(sortStrings(fruits));

//5. Insertion Sort — “Pick and insert in correct position”
//Problem 1 — Sort numbers
// let array = [12, 11, 13, 5, 6];
// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let numberToInsert=array[i];
//         let j=i-1;
//         while(j>=0 && array[j]>numberToInsert){
//             array[j+1]=array[j];
//             j=j-1;
//         }
//         array[j+1]=numberToInsert;
//     }
//     return array;
// }
// console.log(insertionSort(array));

//Problem 2 — Sort an array that is almost sorted
// let array = [1, 2, 3, 5, 4, 6];
// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let numberToInsert = array[i];
//         let j=i-1;
//         while(j>=0 && array[j]>numberToInsert){
//             array[j+1]=array[j];
//             j=j-1;
//         }
//         array[j+1]=numberToInsert;
//     }
//     return array;
// }
// console.log(insertionSort(array));

//Problem 3 — Sort names alphabetically
// let names = ["john", "alex", "emma", "charlie"]
// function sortNames(names){
//     for(let i=1;i<names.length;i++){
//         let nextToInsert=names[i];
//         let j=i-1;
//         while(j>=0 && names[j]>nextToInsert){
//             names[j+1]=names[j];
//             j=j-1;
//         }
//         names[j+1]=nextToInsert;
//     }
//     return names;
// }
// console.log(sortNames(names));

//reverse a string using a stack
// class stack{
//     constructor(){
//         this.stack = [];
//         this.temp=[];
//     }
//     reverseString(str){
//         for(let i=0;i<str.length;i++){
//             this.stack.push(str[i]);
//         }
//         while(this.stack.length>0){
//             let top = this.stack.pop();
//             this.temp.push(top);
//         }
//         return this.temp.join('');
//     }
// }
// const tool = new stack();
// console.log(tool.reverseString('nivleM'));

//Check for balanced parentheses
// function validparentheses(str){
//     let stack = [];
//     for(let i=0;i<str.length;i++){
//         let char = str[i];
//         if(char==='(' || char==='[' || char==='{'){
//             stack.push(char);
//         }else if(char===')' || char===']' || char==='}'){
//             if(isEmpty(stack)){
//                 return false;
//             }
//             const top = stack.pop();
//             if(char===')' && top!=='(' || char===']' && top!=='[' || char==='}' && top!=='{'){
//                 return false;
//             }
//         }
//     }
//     return isEmpty(stack);
// }
// function isEmpty(stack){
//     return stack.length===0;
// }
// console.log(validparentheses('[]{()'));

//Convert decimal to binary using a stack
// class stack{
//     constructor(){
//         this.stack=[];
//     }
//     decimalToBinary(decimal){
//         while(decimal>0){
//             let remainder=decimal%2;
//             this.stack.push(remainder);
//             decimal=Math.floor(decimal/2);
//         }
//         let result=''
//         while(this.stack.length>0){
//             result+=this.stack.pop();
//         }
//         return result;
//     }
// }
// const tool= new stack();
// console.log(tool.decimalToBinary(100));

//implement queue using stack
// class queue{
//     constructor(){
//         this.stack1=[];
//         this.stack2=[];
//     }
//     enqueue(value){
//         this.stack1.push(value);
//     }
//     dequeue(){
//         if(this.stack1.length===0 && this.stack2.length===0){
//             return("return empty stack, can't perform  dequeue operation");
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 let top = this.stack1.pop();
//                 this.stack2.push(top);
//             }
//         }
//         return this.stack2.pop();
//     }
//     printQueue(){
//         let combined = [...this.stack2.slice().reverse(),...this.stack1];
//         console.log(combined.join('|'));
//     }
// }
// const tool = new queue();
// tool.enqueue(10);
// tool.enqueue(20);
// tool.enqueue(30);
// tool.enqueue(40);
// tool.enqueue(50);
// tool.printQueue();
// tool.dequeue();
// tool.printQueue();

//Implement a simple Hash Table
// class hashTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size = size;
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         let index = this.hash(key);
//         this.table[index]=value;
//     }
//     get(key){
//         let index = this.hash(key);
//         return this.table[index];
//     }
//     display(){
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(i,':',this.table[i]);
//             }
//         }
//     }
// }
// const ht = new hashTable(10);
// ht.set("name", "Melvin");
// ht.set("city", "Thrissur");
// ht.display();
// console.log("City:", ht.get("city"));

//Problem 2 — Handle Collisions using Chaining
// class hashTable{
//     constructor(size){
//         this.table=[];
//         this.size=size;
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket){
//             bucket = [[key,value]];
//         }else{
//             const sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 sameKey[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//         this.table[index]=bucket;
//     }
//     get(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket){
//             let sameKey=bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 return sameKey[1];
//             }
//         }
//         return undefined;
//     }
//     display(){
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(i,':',this.table[i]);
//             }
//         }
//     }
// }
// const ht = new hashTable(10);
// ht.set('name','Melvin');
// ht.set('age',21);
// ht.set('city','thrissur');
// ht.display();

//Problem 3 — Count Frequency of Words using Hash Table
// class hashTbale{
//     constructor(size){
//         this.table=[];
//         this.size=size;
//     }
//     hash(key){
//         let  total = 0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket){
//             bucket = [[key,value]];
//         }else{
//             let sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 sameKey[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//         this.table[index]=bucket;
//     }
//     get(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 return sameKey[1];
//             }
//         }
//         return undefined;
//     }
//     display(){
//         for(let i=0;i<this.size;i++){
//             console.log(i,':',this.table[i]);
//         }
//     }
// }
// const str = "hello world hello data world hello";
// const ht = new hashTbale(10);
// const words = str.split(" ");
// for(let word of words){
//     let count = ht.get(word);
//     if(count){
//         ht.set(word,count+1);
//     }else{
//         ht.set(word,1);
//     }
// }
// for (let word of words) {
//     console.log(`${word} → ${ht.get(word)}`);
// }

//Arrange alternate positive and negative numbers in an array
// function arrangeAlternate(array){
//     let possitives = [];
//     let negatives = [];
//     for(let i=0;i<array.length;i++){
//         if(array[i]>=0){
//             possitives.push(array[i]);
//         }else{
//             negatives.push(array[i]);
//         }
//     }
//     let result=[];
//     let i=0, j=0;
//     while(i<possitives.length && j<negatives.length){
//         result.push(possitives[i++]);
//         result.push(negatives[j++]);
//     }
//     while(i<possitives.length){
//         result.push(possitives[i++]);
//     }
//     while(j<negatives.length){
//         result.push(negatives[j++]);
//     }
//     return result;
// }
// let array = [3, -2, 5, -7, 8, -1, -4, 6];
// console.log(arrangeAlternate(array));
const users = [
    {name:'Melvin',age:23},
    {name:'Muzawir',age:20},
    {name:'Lenin',age:21}
]
console.table(users);