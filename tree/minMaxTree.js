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
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
            return;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = node;
                    return;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }
    search(value){
        if(!this.root) return;
        let current = this.root;
        while(current){
            if(value === current.value) return current;
            current = value < current.value ? current.left : current.right;
        }
        return null;
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    min(node){
        if(!node) return null;
        while(node) node = node.left;
        return node;
    }
    max(node){
        if(!node) return null;
        while(node) node = node.right;
        return node;
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