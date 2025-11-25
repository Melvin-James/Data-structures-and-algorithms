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
            if(value<current.value){
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
        const current = this.root;
        while(current){
            if(value === current.value) return current;
            current = value < current.value ? current.left : current.right;
        }
        return null;
    }
    min(node){
        if(!node) return null;
        while(node.left) node = node.left;
        return node;
    }
    max(node){
        if(!node) return null;
        while(node.right) node = node.right;
        return node;
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
}
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.levelOrder();
console.log('Minimum:',bst.min(bst.root));
console.log('Maximum:',bst.max(bst.root));
