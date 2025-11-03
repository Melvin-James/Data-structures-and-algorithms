function firstNonRepeat(str){
    const ht = {};
    for(let i=0;i<str.length;i++){
        ht[str[i]]=(ht[str[i]]||0) + 1;
    }
    for(let i=0;i<str.length;i++){
        if(ht[str[i]]===1){
            return str[i];
        }
    }
    return -1;
}
console.log(firstNonRepeat('aabcd'));