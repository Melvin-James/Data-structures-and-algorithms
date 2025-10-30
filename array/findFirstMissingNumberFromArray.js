function findFirstMissingNumber(input){
    const set = new Set(input);
    for(let i=1;i<=input.length+1;i++){
        if(!set.has(i)){
            return i;
        }
    }
}
let input = [1, 3, 6, 4, 1, 2];
console.log('first missing number in the array:',findFirstMissingNumber(input));
//time - O(n)  space - O(n)