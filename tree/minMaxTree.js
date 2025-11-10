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
        if(node.value < root.value){
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
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
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
}
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.preOrder(bst.root);
console.log('Minimum value in the tree:',bst.min(bst.root));
console.log('Maximum value in the tree:',bst.max(bst.root));