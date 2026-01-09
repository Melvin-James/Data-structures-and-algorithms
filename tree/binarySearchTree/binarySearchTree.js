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
    min(node){
        if(!node) return null;
        while(node.left) node = node.left;
        return node;
    }
    closestValue(target){
        let current = this.root;
        let closest = this.root.value;
        while(current){
            if(Math.abs(target - current.value) < Math.abs(target - closest)){
                closest = current.value;
            }

            if(target < current.value){
                current = current.left;
            }else if(target > current.value){
                current = current.right;
            }else{
                break;
            }
        }
        return closest;
    }
    deleteNode(root,value){
        if(root === null) return root;
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
            }
            if(!root.right){
                return root.left;
            }
            let successor = this.min(root.right);
            root.value = successor.value;
            root.right = this.deleteNode(root.right,successor.value);
        }
        return root;
    }
    delete(value){
        this.root = this.deleteNode(this.root,value);
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