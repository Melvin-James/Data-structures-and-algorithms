function findCommonCharFromTwoStrings(s,t){
    let set1 = new Set(s);
    let set2 = new Set(t);
    let result = [];
    for(let char of set1){
        if(set2.has(char)) result.push(char);
    }
    return result.join(',');
}
console.log(findCommonCharFromTwoStrings('melvin','james'));