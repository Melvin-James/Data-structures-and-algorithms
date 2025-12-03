class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}
class genericTree{
    constructor(value){
        this.root = new Node(value);
    }
    addChild(parentNode,value){
        let node = new Node(value);
        parentNode.children.push(node);
        return node;
    }
    search(node,target){
        if(!node) return null;
        if(node.value === target) return node;
        for(let child of node.children){
            let result = this.search(child,target);
            if(result) return result;
        }
        return null;
    }
    preOrder(node){
        if(!node) return null;
        console.log(node.value);
        for(let child of node.children){
            this.preOrder(child);
        }
    }
    levelOrder(root){
        let queue = [root];
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            for(let child of current.children){
                queue.push(child);
            }
        }
    }
    removeChild(parentNode,value){
        parentNode.children = parentNode.children.filter(child=>child.value !== value);
    }
}
let gt = new genericTree('A');
let b = gt.addChild(gt.root,'B');
let c = gt.addChild(gt.root,'C');
gt.addChild(b,'D');
gt.addChild(c,'E');
gt.addChild(c,'F');
console.log(gt.search(gt.root,'E'));
console.log('----------------------------------------');
gt.preOrder(gt.root);
console.log('----------------------------------------');
gt.levelOrder(gt.root);
console.log('----------------------------------------');
gt.removeChild(b,'D');
gt.levelOrder(gt.root);