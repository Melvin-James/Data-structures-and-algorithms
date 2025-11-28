class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
        }else{
            let queue = [this.root];
            while(queue.length){
                let currentNode = queue.shift();
                if(!currentNode.left){
                    currentNode.left = node;
                    return;
                }else if(!currentNode.right){
                    currentNode.right = node;
                    return;
                }
                queue.push(currentNode.left);
                queue.push(currentNode.right);
            }
        }
    }
    search(value){
        if(!this.root) return;
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(current.value === value) return current;
            if(current.left) queue.push(currentNode.left);
            if(current.right) queue.push(currentNode.right);
        }
    }
}
const bt = new binaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);
console.log(bt.search(10));