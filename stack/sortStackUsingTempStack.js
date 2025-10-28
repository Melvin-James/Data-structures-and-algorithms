class stack{
    constructor(){
        this.stack = [];
        this.temp = [];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.stack.length===0){
            console.log("Stack is empty");
            return;
        }
        return this.stack.pop();
    }
    sort(){
        while(this.stack.length){
            let top = this.pop();
            while(this.temp.length && this.temp[this.temp.length-1]>top){
                this.push(this.temp.pop());
            }
            this.temp.push(top);
        }
        while(this.temp.length){
            this.push(this.temp.pop());
        }
    }
    display(){
        let result = '| ';
        for(let i=0;i<this.stack.length;i++){
            result+=this.stack[i]+' | ';
        }
        console.log(result);
    }
}
const s = new stack();
s.push(40);
s.push(10);
s.push(30);
s.push(20);
s.push(50);
s.display();
s.sort();
s.display();