class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node;
            }else{
                this.insertNode(root.left,node);
            }
        }else{
            if(!root.right){
                root.right = node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }
    insert(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    search(root,value){
        if(!root){
            return false;
        }
        if(root.value === value){
            return true;
        }
        if(value < root.value){
            return this.search(root.left,value);
        }else{
            return this.search(root.right,value);
        }
    }
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right);
        }
    }
    deleteNode(root,value){
        if(!root){
            return null;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value);
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }else{
                let minVal = this.min(root.right);
                root.value = minVal;
                root.right = this.deleteNode(root.right,root.value);
            }
        }
        return root;
    }
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    levelOrder(){
        let queue = [this.root];
        while(queue.length){
            let currentNode = queue.shift();
            if(!currentNode) continue;
            console.log(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }
}
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.levelOrder();
bst.delete(10);
console.log('After deleting:');
bst.levelOrder();
