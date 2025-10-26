
//reverse the sentence
// function reverseWordString(str){
//     let words = str.split(" ");
//     let stack = [];
//     for(let word of words){
//         stack.push(word);
//     }
//     let finals = "";
//     while(stack.length){
//         let current = stack.pop();
//         if(current){
//             finals+=" "+current
//         }
//     }
//     return finals.trim();
// }
// console.log(reverseWordString('the sky is blue'));

//valid paranthesis
// function isValid(str){
//     const stack = [];
//     for(let i=0;i<str.length;i++){
//         const char = str[i];
//         if(char === '(' || char === '[' || char === '{'){
//             stack.push(char);
//         }else if(char === ')' || char === ']' || char === '}'){
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
// console.log(isValid('(){}'));

//implement a stack using array;
// class stack{
//     constructor(){
//         this.stack=[];
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return ("stack empty, can't perform a pop operation");
//         }
//         this.stack.pop();
//     }
//     peek(){
//         if(this.isEmpty()){
//             return ("stack empty, can't perform peek operation");
//         }
//         console.log(this.stack[this.size()-1]);
//     }
//     printStack(){
//         if(this.isEmpty()){
//             return("stack is empty");
//         }
//         for(let i=0;i<this.size();i++){
//             console.log(this.stack[i]);
//         }
//     }
// }
// const tool = new stack();
// tool.push(10);
// tool.push(20);
// tool.push(30);
// tool.push(40);
// tool.printStack();
// console.log("Top element in the stack:"),tool.peek();
// tool.pop();
// tool.pop();
// tool.pop();
// tool.pop();
// console.log(tool.pop());
// console.log(tool.peek());
// console.log(tool.printStack());

// Implement a stack using a linked list
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class stackUsingLinkedList{
//     constructor(){
//         this.head = null;
//     }
//     push(value){
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
//     pop(){
//         if(!this.head){
//             console.log("Stack is empty, Can't perform pop operation");
//             return;
//         }
//         let current = this.head;
//         let prev = null;
//         while(current && current.next){
//             prev = current;
//             current = current.next;
//         }
//         if(prev){
//             prev.next = null;
//         }
//     }
//     peek(){
//         if(!this.head){
//             console.log("stack is empty, can't perform peek operation");
//             return;
//         }
//         let current = this.head;
//         while(current && current.next){
//             current=current.next;
//         }
//         console.log('Top element in the stack:',current.value);
//     }
//     printStack(){
//         if(!this.head){
//             console.log('Stack is empty');
//             return;
//         }
//         let current = this.head;
//         while(current){
//             console.log(current.value);
//             current=current.next;
//         }
//     }
// }
// const stack = new stackUsingLinkedList();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.printStack();
// stack.peek()
// stack.pop();
// stack.printStack();
// stack.peek();
// stack.pop();
// stack.printStack();
// stack.peek();
// stack.pop();
// stack.printStack();
// stack.peek();
// stack.pop();
// stack.printStack();
// stack.peek();

//Reverse a stack using recursion
//let us try to reverse an array using recursion
// function reverseArrayRecursively(array){
//     if(array.length<=1){
//         return array;
//     }
//     return reverseArrayRecursively(array.slice(1)).concat(array[0]);
// }
// let array = [2,4,6,8];
// console.log(reverseArrayRecursively(array));
//now let us try reversing stack
// class stack{
//     constructor(){
//         this.stack=[];
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return;
//         }
//         return this.stack.pop();
//     }
//     peek(){
//         return this.stack[this.size()-1];
//     }
//     printStack(){
//         console.log(this.stack.join(" "));
//     }
// }
// function insertAtBottom(stack,element){
//     if(stack.isEmpty()){
//         stack.push(element);
//         return ;
//     }
//     let top = stack.pop();
//     insertAtBottom(stack,element);
//     stack.push(top);
// }
// function reverseStack(stack){
//     if(stack.isEmpty())return;
//     let top = stack.pop();
//     reverseStack(stack);
//     insertAtBottom(stack,top);
// }
// const tool = new stack();
// tool.push(10);
// tool.push(20);
// tool.push(30);
// tool.push(40);
// console.log('original stack:');
// tool.printStack();
// reverseStack(tool);
// console.log('reversed stack:');
// tool.printStack();


//reverse a stack using recursion
// class stack{
//     constructor(){
//         this.stack=[];
//         this.unique=new Set();
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     push(value){
//         if(this.unique.has(value)){
//             console.log('Value already in the stack');
//             return;
//         }
//         this.unique.add(value);
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return;
//         }
//         return this.stack.pop()
//     }
//     printStack(){
//         if(this.isEmpty()){
//             return;
//         }
//         for(let i=0;i<this.size();i++){
//             console.log(this.stack[i]);
//         }
//     }
//     insertAtBottom(element){
//         if(this.isEmpty()){
//             this.push(element);
//             return;
//         }
//         let top = this.pop();
//         this.insertAtBottom(element);
//         this.push(top);
//     }
//     reverseRecursive(){
//         if(this.isEmpty()) return;
//         let top = this.pop();
//         this.reverseRecursive();
//         this.insertAtBottom(top);
//     }
//     reverse(){
//         let temp=[];
//         while(!this.isEmpty()){
//             let top = this.pop();
//             temp.push(top);
//         }
//         console.log(temp);
//     }
//     deleteSpecNode(value){
//         let temp = [];
//         if(this.isEmpty()) return;
//         while(!this.isEmpty()){
//             let top = this.pop();
//             if(top!==value){
//                 temp.push(top);
//             }
//         }
//         while(temp.length>0){
//             this.push(temp.pop());
//         }
//     }
//     removeMid(){
//         let temp = [];
//         if(this.isEmpty()) return;
//         let mid = Math.floor(this.size()/2);
//         let midVal = this.stack[mid];
//         while(!this.isEmpty()){
//             let top = this.pop();
//             if(top!==midVal){
//                 temp.push(top);
//             }
//         }
//         while(temp.length>0){
//             this.push(temp.pop());
//         }
//     }
// }
// const tool = new stack();
// tool.push(10);
// tool.push(20);
// tool.push(40);
// tool.push(50);
// tool.printStack();
// tool.push(50);
// tool.printStack();
// console.log('Stack before:');
// tool.printStack();
// tool.removeMid();
// console.log('stack after:');
// tool.printStack();
// tool.deleteSpecNode(20);
// console.log('stack after:');
// tool.printStack();
// console.log('Original stack');
// tool.printStack();
// tool.reverseRecursive();
// console.log('Reversed stack')
// tool.printStack();
// console.log('reverse using a temp stack');
// tool.reverse()

//delete a specific node from stack implemented using stack.
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class stackUsingLinkedList{
//     constructor(){
//         this.top = null;
//     }
//     isEmpty(){
//         return this.top===null;
//     }
//     push(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.top=node;
//             return;
//         }
//         node.next =this.top;
//         this.top=node;
//     }
//     pop(){
//         if(this.isEmpty()) return;
//         this.top = this.top.next;
//     }
//     deleteSpecNode(value){
//         if(this.isEmpty()) return;
//         if(this.top.value===value){
//             this.top=this.top.next;
//         }else{
//             let current = this.top;
//             let prev = null;
//             while(current && current.value!==value){
//                 prev=current;
//                 current = current.next;
//             }
//             if(!current){
//                 return("Taget value not found");
//             }else{
//                 prev.next=current.next
//             }
//         }
//     }
//     printStack(){
//         let result = '';
//         let current = this.top;
//         while(current){
//             result+=current.value+' -> ';
//             current=current.next;
//         }
//         console.log(result+'null');
//     }
// }
// const stack = new stackUsingLinkedList();
// stack.push(90);
// stack.push(80);
// stack.push(70);
// stack.push(60);
// stack.printStack();
// stack.deleteSpecNode(90);
// stack.printStack();

//Implement MinStack (push, pop, getMin in O(1))
// class minStack{
//     constructor(){
//         this.stack=[];
//         this.minStack=[];
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     getMin(){
//         if(this.minStack.length==0) return;
//         return this.minStack[this.minStack.length-1];
//     }
//     push(value){
//         this.stack.push(value);
//         if(this.minStack.length===0 || value<=this.getMin()){
//             this.minStack.push(value);
//         }
//     }
//     pop(){
//         if(this.isEmpty()) return;
//         const removed = this.stack.pop();
//         if(removed === this.getMin()){
//             this.minStack.pop();
//         }
//     }
//     top(){
//         if(this.isEmpty()) return;
//         return this.stack[this.size()-1];
//     }
// }
// const s = new minStack();
// s.push(-2);
// s.push(0);
// s.push(-3);
// console.log(s.getMin()); 
// s.pop();
// console.log(s.top());  
// console.log(s.getMin()); 

//Check if a string is palindrome using stack
// class stack{
//     constructor(){
//         this.stack=[];
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     printStack(){
//         if(this.isEmpty()){
//             return('Stack is empty');
//         }
//         let result ='';
//         for(let i=0;i<this.size();i++){
//             result+=this.stack[i]+'-'
//         }
//         console.log(result);
//     }
//     isPalindrome(){
//         if(this.isEmpty()){
//             return('Stack is empty.');
//         }
//         let left = 0;
//         let right = this.size()-1;
//         while(left<right){
//             if(this.stack[left]!==this.stack[right]){
//                 return('Not palindrome');
//             }
//             left++;
//             right--;
//         }
//         return('Palindrome');
//     }
// }
// const tool = new stack();
// tool.push('M');
// tool.push('A');
// tool.push('D');
// tool.push('A');
// tool.push('A');
// tool.printStack();
// console.log(tool.isPalindrome());

//Valid parentheses
// function isValid(str){
//     const stack=[];
//     for(let i=0;i<str.length;i++){
//         let char = str[i];
//         if(char==='('||char==='['||char==='{'){
//             stack.push(char);
//         }else if(char===')' || char===']' || char==='}'){
//             if(isEmpty(stack)){
//                 return false;
//             }
//             const top = stack.pop();
//             if(char===')' && top!=='('|| char===']' && top!=='[' ||char==='}' && top!=='{'){
//                 return false;
//             }
//         }
//     }
//     return(isEmpty(stack));
// }
// function isEmpty(stack){
//     return stack.length===0;
// }
// console.log(isValid('([{}])'));

//. Reverse a string using stack
// class stack{
//     constructor(){
//         this.stack=[];
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return;
//         }
//         return this.stack.pop();
//     }
//     reverseString(str){
//         for(let i=0;i<str.length;i++){
//             this.push(str[i]);
//         }
//         let result = '';
//         while(!this.isEmpty()){
//             let top = this.pop();
//             result+=top;
//         }
//         console.log('reversed string using stack:',result);
//     }
// }
// const tool = new stack();
// tool.reverseString('hello');

//sort a stack
// class stack{
//     constructor(){
//         this.stack=[];
//     }
//     size(){
//         return this.stack.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return("stack is empty,can't perform pop operation");
//         }
//         return this.stack.pop();
//     }
//     peek(){
//         if(this.isEmpty()){
//             return("stack is empty, can't perform peek operation");
//         }
//         return this.stack[this.size()-1];
//     }
//     insertInSortedOrder(element){
//         if(this.isEmpty()||element>this.peek()){
//             this.push(element);
//             return;
//         }
//         let top = this.pop();
//         this.insertInSortedOrder(element);
//         this.push(top);
//     }
//     sort(){
//         if(this.isEmpty())return;
//         let top = this.pop();
//         this.sort();
//         this.insertInSortedOrder(top);
//     }
//     printStack() {
//         console.log("(bottom) | " + this.stack.join(" | ") + " | (top)");
//     }
// }
// const tool = new stack();
// tool.push(40);
// tool.push(30);
// tool.push(60);
// tool.push(10);
// tool.printStack();
// tool.sort();
// tool.printStack();

//Implement stack with undo-redo functionality
// class stack{
//     constructor(){
//         this.undoStack=[];
//         this.redoStack=[];
//     }
//     performAction(action){
//         this.undoStack.push(action);
//         this.redoStack=[];
//         console.log(`performed:${action}`);
//     }
//     undo(){
//         if(this.undoStack.length===0){
//             console.log('Nothing to undo');
//             return;
//         }
//         const action = this.undoStack.pop();
//         this.redoStack.push(action);
//         console.log(`undo:${action}`);
//     }
//     redo(){
//         if(this.redoStack.length===0){
//             console.log('Nothing to redo');
//             return;
//         }
//         const action = this.redoStack.pop();
//         this.undoStack.push(action);
//         console.log(`redo:${action}`);
//     }
//     showStacks() {
//         console.log("Undo Stack:", this.undoStack);
//         console.log("Redo Stack:", this.redoStack);
//         console.log("--------------------------");
//     }
// }
// const tool = new stack();
// tool.performAction('A');
// tool.performAction('B');
// tool.performAction('C');
// tool.showStacks();
// tool.undo();
// tool.undo();
// tool.showStacks();
// tool.redo();
// tool.showStacks();
// tool.performAction('D');
// tool.showStacks();

// Implement a stack using a queue
//1.create two queues q1,q2
//2.new elements enqueue to the q2
//3.dequeue all elements from q1 to q2
//4.swap q1 and q2
// class stackUsingQueue{
//     constructor(){
//         this.q1=[];
//         this.q2=[];
//     }
//     push(value){
//         this.q2.push(value);
//         while(this.q1.length>0){
//             this.q2.push(this.q1.shift());
//         }
//         [this.q1,this.q2]=[this.q2,this.q1];
//     }
//     pop(){
//         if(this.q1.length===0){
//             return("stack is empty");
//         }
//         return this.q1.shift();
//     }
//     top(){
//         if(this.q1.length===0) return null;
//         return(this.q1[0])
//     }
//     printStack(){
//         console.log("Stack (top→bottom):", this.q1);
//     }
// }
// const stack = new stackUsingQueue();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.printStack();
// console.log(stack.top());
// stack.pop();
// stack.printStack();

//Implement a stack using a linked list t(c)=O(1);
// class Node{
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class stackUsingLinkedList{
//     constructor(){
//         this.top = null;
//     }
//     push(value){
//         let node = new Node(value);
//         if(!this.top){
//             this.top = node;
//             return;
//         }
//         node.next = this.top;
//         this.top = node;
//     }
//     pop(){
//         if(!this.top) return;
//         this.top = this.top.next;
//     }
//     peek(){
//         if(!this.top) return;
//         console.log('Top element:',this.top.value);
//     }
//     display(){
//         let result = '';
//         let current = this.top;
//         while(current){
//             result+=current.value+' => ';
//             current = current.next;
//         }
//         console.log(result+'null');
//     }
// }
// const stack = new stackUsingLinkedList();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.display();
// stack.pop();
// stack.display();
// stack.peek(/);

//Implement a stack using a queue
// class stackUsingQueue{
//     constructor(){
//         this.q1=[];
//         this.q2=[];
//     }
//     push(value){
//         this.q2.push(value);
//         while(this.q1.length>0){
//             this.q2.push(this.q1.shift());
//         }
//         [this.q1,this.q2]=[this.q2,this.q1];
//     }
//     pop(){
//         if(this.q1.length===0){
//             return('stack is empty');
//         }
//         this.q1.shift();
//     }
//     peek(){
//         if(this.q1.length===0) return null;
//         return this.q1[0];
//     }
//     printStack(){
//         console.log('(top -> bottom)',this.q1);
//     }
// }
// const stack = new stackUsingQueue();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.printStack();
// stack.pop();
// stack.printStack();


//Reverse a stack using recursion
// class Stack{
//     constructor(){
//         this.stack=[];
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.stack.length===0) return;
//         this.stack.pop();
//     }
//     peek(){
//         if(this.stack.length===0) return;
//         return this.stack[this.stack.length-1]
//     }
//     display(){
//         if(this.stack.length===0) return;
//         let result = '| ';
//         for(let i=0;i<this.stack.length;i++){
//             result+=this.stack[i]+' | ';
//         }
//         console.log(result);
//     }
//     insertAtBottom(element){
//         if(this.stack.length===0){
//             this.stack.push(element);
//             return;
//         }
//         let top = this.stack.pop();
//         this.insertAtBottom(element);
//         this.stack.push(top);
//     }
//     reverse(){
//         if(this.stack.length===0) return;
//         let top = this.stack.pop();
//         this.reverse();
//         this.insertAtBottom(top);
//     }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.display();
// stack.reverse();
// stack.display();

//Reverse a stack using a temporary stack
// class Stack{
//     constructor(){
//         this.stack = [];
//         this.stack2 = [];
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.stack.length===0){
//             return "Empty stack"
//         }
//         this.stack.pop();
//     }
//     peek(){
//         if(this.stack.length===0){
//             return "Empty stack";
//         }
//         return this.stack[this.stack.length-1];
//     }
//     reverse(){
//         if (this.stack.length === 0) {
//             return "Empty stack";
//         }
//         while (this.stack.length > 0) {
//             this.stack2.push(this.stack.pop());
//         }
//         while (this.stack2.length > 0) {
//             this.stack.push(this.stack2.shift());
//         }
//     }
//     display(){
//         let result = '| ';
//         for(let i=0;i<this.stack.length;i++){
//             result+=this.stack[i]+' | ';
//         }
//         console.log(result);
//     }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.display();
// stack.reverse();
// stack.display();

//Delete a specific node from a stack
// class Stack{
//     constructor(){
//         this.stack = [];
//         this.temp = [];
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         if(this.stack.length===0){
//             return "stack is empty";
//         }
//         this.stack.pop();
//     }
//     peek(){
//         if(this.stack.length===0){
//             return "stack is empty";
//         }
//         this.stack.pop();
//     }
//     display(){
//         let result = '| ';
//         for(let i=0;i<this.stack.length;i++){
//             result+=this.stack[i]+' | ';
//         }
//         console.log(result);
//     }
//     deleteSpecNode(value){
//         if(this.stack.length===0){
//             return "stack is empty";
//         }
//         while(this.stack.length>0 && this.stack[this.stack.length-1]!==value){
//             this.temp.push(this.stack.pop());
//         }
//         if(this.stack.length>0){
//             this.stack.pop();
//         }
//         while(this.temp.length>0){
//             this.stack.push(this.temp.pop());
//         }
//     }
//     deleteSpecNodeByIndex(pos){
//         let count = this.stack.length-1;
//         while(this.stack.length > 0 && count!==pos){
//             this.temp.push(this.stack.pop());
//             count--;
//         }
//         if(this.stack.length>0){
//             this.stack.pop();
//         }
//         while(this.temp.length>0){
//             this.stack.push(this.temp.pop());
//         }
//     }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.display();
// stack.deleteSpecNodeByIndex(3);
// stack.display();

//implement undo redo functionality
// class stack{
//     constructor(){
//         this.undoStack = [];
//         this.redoStack = [];
//     }
//     performAction(action){
//         this.undoStack.push(action);
//         this.redoStack = [];
//         console.log(`performed action ${action}`);
//     }
//     undo(){
//         if(this.undoStack.length===0){
//             console.log('Nothing to undo');
//             return;
//         }
//         const action = this.undoStack.pop();
//         this.redoStack.push(action);
//         console.log(`undo ${action}`);
//     }
//     redo(){
//         if(this.redoStack.length===0){
//             console.log('Nothing to redo');
//             return;
//         }
//         const action = this.redoStack.pop();
//         this.undoStack.push(action);
//         console.log(`redo ${action}`);
//     }
//     showStacks(){
//         console.log('undoStack:',this.undoStack);
//         console.log('redoStack:',this.redoStack);
//         console.log('-------------------------');
//     }
// }
// const tool = new stack();
// tool.performAction('A');
// tool.performAction('B');
// tool.performAction('C');
// tool.showStacks();
// tool.undo();
// tool.undo();
// tool.showStacks();
// tool.redo();
// tool.showStacks();
// tool.performAction('D');
// tool.showStacks();

/*---------------------------------------------------------------------------*/