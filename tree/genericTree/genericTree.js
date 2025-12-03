class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}
class GenericTree{
    constructor(value){
        this.root = new Node(value);
    }
    addChild(parentNode,value){
        const newNode = new Node(value);
        parentNode.children.push(newNode);
        return newNode;
    }
    search(node,target){
        if(!node) return null;
        if(node.value === target) return node;
        for(let child of node.children){
            const result = this.search(child,target);
            if(result) return result;
        }
        return null;
    }
    //DFS
    preOrder(node){
        if(!node) return;
        console.log(node.value);
        for(let child of node.children){
            this.preOrder(child);
        }
    }
    //BFS
    levelOrder(root){
        const queue = [root];
        while(queue.length){
            const current = queue.shift();
            console.log(current.value);
            for(let child of current.children){
                queue.push(child);
            }
        }
    }
}
const gt = new GenericTree('A');
const b = gt.addChild(gt.root,'B');
const c = gt.addChild(gt.root,'C');
gt.addChild(b,'D');
gt.addChild(b,'E');
gt.addChild(c,'F');
console.log(gt.search(gt.root,'E'));
console.log('Pre order');
gt.preOrder(gt.root);
console.log('Level order');
gt.levelOrder(gt.root);