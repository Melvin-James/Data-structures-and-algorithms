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
console.log(bst.search(10));
console.log(bst.search(5));
console.log(bst.search(15));
console.log(bst.search(3));
console.log(bst.search(7));
