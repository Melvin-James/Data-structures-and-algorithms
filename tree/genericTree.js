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
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        let node = new Node(value);
        if(this.isEmpty()){
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
    levelOrder(){
        const queue = [this.root];
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
}
const bt = new binaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);
bt.levelOrder();