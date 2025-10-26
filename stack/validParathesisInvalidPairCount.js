function paranthesisInvalidPair(str){
    const stack = [];
    let count=0;
    for(let char of str){
        if(char==='(' || char==='{' || char==='['){
            stack.push(char);
        }else if(char === ')' || char === '}' || char === ']'){
            if(stack.length===0){
                count++;
            }else{
                let top = stack.pop();
                if(char === ')' && top !== '(' || char === ']' && top !== '[' || char === '}' && top !== '{'){
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(paranthesisInvalidPair('(()'));