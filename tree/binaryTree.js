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
    search(value){
        if(!this.root) return;
        const queue = [this.root];
        while(queue.length){
            const curNode = queue.shift();
            if(curNode.value === value) return curNode;
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);
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
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}
const bt = new binaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);
bt.postOrder(bt.root);