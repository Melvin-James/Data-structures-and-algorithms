class stack{
    constructor(){
        this.stack = [];
    }
    isEmpty(){
        return this.stack.length===0;
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.isEmpty()) return;
        return this.stack.pop();
    }
    isValid(str){
        for(let char of str){
            if(char === '(' || char === '[' || char === '{'){
                this.stack.push(char);
            }else if(char === ')' || char === ']' || char === '}'){
                let top = this.stack.pop();
                if(char === ')' && top !== '(' || char === '}' && top !== '{' || char === ']' && top !== '['){
                    return false;
                }
            }
        }
        return this.isEmpty();
    }
}
const s = new stack();
console.log(s.isValid('([{}])'));
console.log(s.isValid('([{})'));
