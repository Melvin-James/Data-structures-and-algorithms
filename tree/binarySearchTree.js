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
    search(value){
        let cur = this.root;
        while(cur){
            if(cur.value === value) return cur;
            cur = value < cur.value ? cur.left : cur.right;
        }
        return null;
    }
    levelOrder(){
        if(!this.root) return;
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
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
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(15));
console.log('pre order traversal:');
bst.preOrder(bst.root);
console.log('in order traversal:');
bst.inOrder(bst.root);
console.log('post order traversal:');
bst.postOrder(bst.root);