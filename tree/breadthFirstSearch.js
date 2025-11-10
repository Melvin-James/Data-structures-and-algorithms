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
        if(this.isEmpty()){
            return false;
        }
        if(root.value === value){
            return true;
        }else if(value < root.value){
            return this.search(root.left,value);
        }else{
            return this.search(root.right,value);
        }
    }
    levelOrder(){
        if(this.isEmpty()){
            console.log('Empty tree');
            return;
        }
        const queue = [];
        queue.push(this.root);
        while(queue.lenegth){
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
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,15));
console.log(bst.search(bst.root,3));
console.log(bst.search(bst.root,7));
