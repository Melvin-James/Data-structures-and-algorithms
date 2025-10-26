class stack{
    constructor(){
        this.stack = [];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.stack.length===0) return;
        return this.stack.pop();
    }
    reverse(){
       let temp = [...this.stack];
       temp.reverse();
       return temp;;
    }
    isPalindrome(){
        let reversed = this.reverse();
        for(let i=0;i<this.stack.length;i++){
            if(reversed[i]!==this.stack[i]){
                return "Not palindrome";
            }
        }
        return "Palindrome";
    }
}
const s = new stack();
let str = "MALAYAAM";
for(let char of str){
    s.push(char);
}
console.log(s.isPalindrome());