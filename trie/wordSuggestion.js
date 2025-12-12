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
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isWordEnd = true;
    }
    findNode(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }
    collectWords(node,prefix,result){
        if(node.isWordEnd){
            result.push(prefix);
        }
        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,result);
        }
    }
    suggestWords(prefix){
        let result = [];
        let current = this.findNode(prefix);
        if(!current) return result;
        this.collectWords(current,prefix,result);
        return result;
    }
}
const trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("care");
trie.insert("dog");
trie.insert("dove");

console.log(trie.suggestWords("ca")); 

console.log(trie.suggestWords("do")); 

console.log(trie.suggestWords("z"));
