class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
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
    
    BFS(){
        if(!this.root) return;
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    
    height(root){
        if(root === null){
            return 0;
        }
        
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
}


const bt = new BinaryTree();
bt.insert('A');
bt.insert('B');
bt.insert('C');
bt.insert('D');
bt.insert('E');
bt.insert('F');
bt.insert('G');
bt.insert('H');
bt.BFS();
console.log('Height of the binary tree:',bt.height(bt.root));