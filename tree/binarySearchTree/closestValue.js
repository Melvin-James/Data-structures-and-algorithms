//Find closest value  to the target value in BST
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
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

    closestValue(target){
        if(!this.root) return;
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

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(3);
bst.insert(5);
bst.insert(8);
bst.insert(12);
bst.levelOrder();
console.log('Closest value:',bst.closestValue(13));

