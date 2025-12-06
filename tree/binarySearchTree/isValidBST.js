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
        let curNode = this.root;
        while(true){
            if(value < curNode.value){
                if(!curNode.left){
                    curNode.left = node;
                    return;
                }
                curNode = curNode.left;
            }else{
                if(!curNode.right){
                    curNode.right = node;
                    return;
                }
                curNode = curNode.right;
            }
        }
    }
    isValidBST(node = this.root, min = -Infinity, max = Infinity){
        if(!node) return true;
        if(node.value <= min || node.value >= max){
            return false;
        }
        return(
            this.isValidBST(node.left,min,node.value) &&
            this.isValidBST(node.right,node.value,max)
        )
    }
}
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(6);
bst.insert(20);
console.log(bst.isValidBST())