//Using Hash Map Time =O(n), Space = O(1)
function validAnagrams(s,t){
    if(s.length!==t.length) return false;
    let count = {};
    for(let char of s){
        count[char]=(count[char]||0)+1;
    }
    for(let char of t){
        if(!count[char]) return false;
        count[char]--;
    }
    return true;
}
console.log(validAnagrams('listen','silent'));
console.log(validAnagrams('car','var'));
console.log(validAnagrams('melvin','sona'));