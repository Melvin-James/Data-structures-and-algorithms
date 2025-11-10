class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}
class tree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    add(parentValue,newValue){
        let newNode = new Node(newValue); 
        if(this.isEmpty()){
            this.root = newNode;
            return;
        }
        const parent = this.searchNode(this.root,parentValue);
        if(parent){
            parent.children.push(newNode);
        }else{
            console.log(`parent node "${parentValue}" not found`);
        }
    }
    searchNode(node,value){
        if(!node) return null;
        if(node.value === value) return node;
        for(let child of node.children){
            const found = this.searchNode(child,value);
            if(found) return found;
        }
        return null;
    }
    traverse(node = this.root){
        if(!node) return;
        console.log(node.value);
        for(let child of node.children){
            this.traverse(child);
        }
    }
}

const t = new tree();
console.log(t.isEmpty()); 

t.add(null, "A"); 
t.add("A", "B");
t.add("A", "C");
t.add("A", "D");
t.add("C", "E");
t.add("C", "F");

console.log("DFS Traversal:");
t.traverse(t.root);