// class hashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
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
//         this.table[index]=value;
//     }
//     get(key){
//         let index = this.hash(key);
//         return this.table[index];
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,':',this.table[i]);
//             }
//         }
//     }
// }
// const ht = new hashTable(5);
// ht.set('apple',120);
// ht.set('banana',30);
// ht.set('orange',32);
// ht.display();
// console.log(ht.get('orange'));

//Implement hash table with collision handling
// class hashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if(!bucket){
//             this.table[index]=[[key,value]];
//         }else{
//             const sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 sameKey[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if(bucket){
//             const sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 return sameKey[1];
//             }
//         }
//         return undefined;
//     }
//     remove(key){
//         const index = this.hash(key);
//         const bucket = this.table[0];
//         if(bucket){
//             const itemIndex = bucket.findIndex(item=>item[0]===key);
//             if(itemIndex!==1){
//                 bucket.splice(itemIndex,1);
//             }
//         }
//     }
// }
// const ht = new hashTable();
// ht.set('apple',10);
// ht.set('orange',20);
// ht.set('banana',30);
// ht.set('papel',40);
// console.log('Value of papel:',ht.get('papel'));

// Implement hash table with collision handling && remove pair of specific key
// class hashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
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
//             this.table[index]=[[key,value]];
//         }else{
//             let sameKey = bucket.find(item=>item[0] === key);
//             if(sameKey){
//                 sameKey[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//     }
//     get(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 return sameKey[1];
//             }
//             return('Not found');
//         }
//     }
//     delete(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket){
//             return "Key not found"
//         }
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 bucket.splice(i,1);
//                 if(bucket.length===0){
//                     bucket=undefined;
//                 }
//                 return "Removed Key";
//             }
//         }
//         return "Key not found";
//     }
//     display(){
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(i,':',this.table[i])
//             }
//         }
//     }
// }
// const ht = new hashTable(5);
// ht.set('name', 'Melvin');
// ht.set('place', 'Pudukkad');
// ht.set('age', 22);
// ht.set('mane', 'King'); 
// console.log(ht.get('name')); 
// console.log(ht.get('place')); 
// console.log(ht.delete('age'));   
// console.log(ht.get('mane'));  
// console.log(ht.get('xyz'));

//implement rehashing
// class hashTable{
//     constructor(size=4){
//         this.table = new Array(size);
//         this.size = size;
//         this.count = 0;
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
//         let bucket = this.table[index];
//         if(!bucket){
//             this.table[index]=[[key,value]];
//         }else{
//             let sameKey = bucket.find(item=>item[0]===key);
//             if(sameKey){
//                 sameKey[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//         this.count++;

//         if(this.count / this.size > 0.7){
//             this.rehash();
//         }
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
//     rehash(){
//         console.log('rehasing....current size =',this.size);
//         let oldTable = this.table;
//         this.size = this.size * 2;
//         this.table = new Array(this.size);
//         this.count = 0;
//         for(let bucket of oldTable){
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     this.set(key,value);
//                 }
//             }
//         }
//         console.log('rehashing completed...size =',this.size);
//     }
//     display(){
//         let result ='';
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(i,':',this.table[i]);
//             }
//         }
//     }
// }
// let ht = new hashTable(4);
// ht.set('name','Melvin');
// ht.set('city','Thrissur');
// ht.set('age',21);
// ht.display();

//First non-repeating character in string
// function firstNonRepeatingChar(str){
//     const map = {};
//     for(let char of str){
//         map[char]=(map[char]||0)+1;
//     }
//     for(let char of str){
//         if(map[char]===1){
//             return char;
//         }
//     }
//     return -1;
// }
// console.log(firstNonRepeatingChar("leetcode"));
// console.log(firstNonRepeatingChar("aabbccde"));
// console.log(firstNonRepeatingChar("aabbcc"));    

