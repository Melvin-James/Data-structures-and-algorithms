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
    longestCommonPrefix(){
        let prefix = "";
        let node = this.root;
        while(true){
            let keys = Object.keys(node.children);
            if(keys.length !== 1) break;
            if(node.isWordEnd) break;
            let char = keys[0];
            prefix+=char;
            node = node.children[char];
        }
        return prefix;
    }
}
const trie = new Trie();
trie.insert('cat');
trie.insert('car');
trie.insert('carbon');
console.log(trie.longestCommonPrefix());