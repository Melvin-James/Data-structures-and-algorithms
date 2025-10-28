let input = [10, 20, 30, 40, 50, 60];
function removeOddIndexes(input){
    let pos = 0;
    for(let i=0;i<input.length;i+=2){
        input[pos++] = input[i];
    }
    input.length = pos;
    return input;
}
console.log(removeOddIndexes(input));

//Time - O(n)
//Space - O(1)