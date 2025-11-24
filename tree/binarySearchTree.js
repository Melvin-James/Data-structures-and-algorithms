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
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
            return;
        }
        let cur = this.root;
        while(true){
            if(value<cur.value){
                if(!cur.left){
                    cur.left = node;
                    return;
                }
                cur = cur.left;
            }else{
                if(!cur.right){
                    cur.right = node;
                    return;
                }
                cur = cur.right;
            }
        }
    }
    search(root,value){
        if(!root){
            return false;
        }else{
            if(value === root.value){
                return true;
            }else if(value < root.value){
                return this.search(root.left,value);
            }else{
                return this.search(root.right,value);
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
const bst = new binarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log('pre order traversal:');
bst.preOrder(bst.root);
console.log('in order traversal:');
bst.inOrder(bst.root);
console.log('post order traversal:');
bst.postOrder(bst.root);