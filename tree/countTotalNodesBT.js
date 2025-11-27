class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
            return;
        }
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(!current.left){
                current.left = node;
                return;
            }
            if(!current.right){
                current.right = node;
                return;
            }
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    countNodes(){
        if(!this.root) return;
        let queue = [this.root];
        let count = 0;
        while(queue.length){
            let current = queue.shift();
            if(current) count++;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return count;
    }
}
const bt = new binaryTree();
bt.insert('A');
bt.insert('B');
bt.insert('C');
bt.insert('D');
bt.insert('E');
console.log('Number of nodes:',bt.countNodes());