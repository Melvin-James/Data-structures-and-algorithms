class stack{
    constructor(){
        this.stack=[];
        this.temp=[];
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return;
        }
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    delete(){
        let mid = Math.floor(this.stack.length/2);
        let index = this.stack.length-1;
        while(index!==mid){
            this.temp.push(this.pop());
            index--;
        }
        this.stack.pop();
        while(this.temp.length){
            this.push(this.temp.pop());
        }
    }
    display(){
        if(this.stack.length===0){
            return;
        }
        let result = '| ';
        for(let i=0;i<this.stack.length;i++){
            result+=this.stack[i]+' | ';
        }
        console.log(result);
    }
}
const s = new stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.display();
s.delete();
s.display();