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
            if(!current.children[ch]){
                return false;
            }
            current = current.children[ch];
        }
        return current.isWordEnd;
    }
    startsWithPrefix(prefix){
        let current = this.root;
        for(let ch of prefix){
            if(!current.children[ch]){
                return false;
            }
            current = current.children[ch];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert('ball');
trie.insert('bat');
trie.insert('doll');
console.log(trie.contains('bat'));
console.log(trie.contains('bomb'));
console.log(trie.startsWithPrefix('d'));
