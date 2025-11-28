class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let current = this.root;
        for(let ch of word){
            if(!current.children[ch]){
                current.children[ch] = new Node();
            }
            current = current.children[ch];
        }
        current.isWordEnd = true;
    }
    contains(word){
        let current = this.root;
        for(let ch of word){
            if(!current.children[ch]) return false;
            current = current.children[ch];
        }
        return current.isWordEnd;
    }
    startsWith(prefix){
        let current = this.root;
        for(let ch of prefix){
            if(!current.children[ch]) return false;
            current = current.children[ch];
        }
        return true;
    }
    findNode(prefix){
        let current = this.root;
        for(let ch of prefix){
            if(!current.children[ch]) return null;
            current = current.children[ch];
        }
        return current;
    }
    collectWords(node,prefix,result){
        if(node.isWordEnd){
            result.push(prefix);
        }
        for(let ch in node.children){
            this.collectWords(node.children[ch],prefix+ch,result);
        }
    }
    autoComplete(prefix){
        let current = this.findNode(prefix);
        let result = [];
        if(!current) return result;
        this.collectWords(current,prefix,result);
        return result;
    }
}
const trie = new Trie();
trie.insert("car");
trie.insert("care");
trie.insert("cat");
trie.insert("dog");
trie.insert("door");
trie.insert("doll");

console.log(trie.autoComplete("ca")); 

console.log(trie.autoComplete("do"));

console.log(trie.autoComplete("z"));