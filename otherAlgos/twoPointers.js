//TWO POINTERS ALGORITHM
//1)OPPOSITE ENDS
//2)SAME DIRECTION

// Example 1: Opposite Ends (Two-sum in sorted array)
// function twoSum(array,target){
//     let left = 0;
//     let right = array.length-1;
//     let sum = 0;
//     while(left<right){
//         sum = array[left] + array[right];
//         if(sum === target) return [array[left], array[right]]
//         else if(sum<target) left++;
//         else right--;
//     }
//     return [];
// }
// console.log(twoSum([1, 2, 4, 7, 10, 11], 15));

//Example 2: Same Direction (Find Pair with Given Difference)
// function findPair(array,diff){
//     let i = 0;
//     let j = 1;
//     while(i<array.length && j<array.length){
//         let currentDiff = array[j]-array[i];
//         if(i!=j && currentDiff===diff) return [array[i],array[j]]
//         else if(currentDiff<diff) j++;
//         else i++;
//     }
//     return [];
// }
// console.log(findPair([1, 3, 5, 7, 9], 2));

//Example 3: Linked List (Slow & Fast Pointer)
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null;
//     }
    // insert(value){
    //     let node = new Node(value);
    //     if(!this.head){
    //         this.head = node;
    //         return;
    //     }
    //     let current = this.head;
    //     while(current && current.next){
    //         current = current.next;
    //     }
    //     current.next = node;
    // }
//     findMidNode(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast.next  && fast.next.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         console.log('Middle Node value:',slow.value);
//     }
//     removeNthNodeFromEnd(n){
//         if(!this.head) return;
//         let dummy = new Node(0);
//         dummy.next = this.head;
//         let slow = dummy, fast = dummy;
//         for(let i=0;i<n;i++){
//             if(!fast) return;
//             fast = fast.next;
//         }
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next;
//         }
//         if(slow.next) slow.next = slow.next.next;
//         this.head = dummy.next;
//     }
//     display(){
//         let result = '';
//         let current = this.head;
//         while(current){
//             result+=current.value+' => ';
//             current = current.next;
//         }
//         console.log(result+'null');
//     }
// }
// const list = new linkedList();
// list.insert(10);
// list.insert(30);
// list.insert(21);
// list.insert(45);
// list.insert(90);
// list.display();
// list.removeNthNodeFromEnd(5);
// list.display();

//Fast-slow pointer: Detect cycle in linked list
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null;
//     }
//     insert(value){
//         let node = new Node(value);
//         if(!this.head){
//             this.head = node;
//             return;
//         }
//         let current = this.head;
//         while(current && current.next){
//             current = current.next;
//         }
//         current.next = node;
//     }
//     hasCycle(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//             if(slow === fast){
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// const list = new linkedList();
// list.insert(10);
// list.insert(20);
// list.insert(30);
// list.insert(40);
