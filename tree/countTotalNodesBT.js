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
    countNodes(){
        let count = 0;
        let queue = [this.root];
        while(queue.length){
            let currentNode = queue.shift();
            count++;
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return count;
    }
}
const bt = new binaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);
console.log('Number of nodes in tree:',bt.countNodes());