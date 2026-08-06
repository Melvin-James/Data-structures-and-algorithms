class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
            return;
        }
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(!current.left){
                current.left = node;
                return;
            }
            if(!current.right){
                current.right = node;
                return;
            }
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    search(value){
        if(!this.root) return;
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(value === current.value) return current;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        } 
    }
    //BFS
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
    //DFS TRAVERSALS
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

    minVal(root = this.root){
        if(!root) return Infinity;
        return Math.min(root.value,this.minVal(root.left),this.minVal(root.right))
    }

    maxVal(root = this.root){
        if(!root) return -Infinity;
        return Math.max(root.value,this.maxVal(root.left),this.maxVal(root.right));
    }

}
const bt = new binaryTree();
bt.insert(23);
bt.insert(12);
bt.insert(90);
bt.insert(56);
bt.insert(45);
bt.insert(67);
console.log(bt.search('C'));
console.log('BFS TRAVERSAL: LEVEL ORDER');
bt.levelOrder();
console.log('DFS TRAVERSAL:PRE ORDER');
bt.preOrder(bt.root);
console.log('DFS TRAVERSAL:IN ORDER');
bt.inOrder(bt.root);
console.log('DFS TRAVERSAL:POST ORDER');
bt.postOrder(bt.root);
console.log('Minimum value:',bt.minVal());
console.log('Maximum value:',bt.maxVal());