//Reverse each word in a string
let str = 'Hello my name is melvin'

function reverse(word){
    let res = '';
    let right = word.length-1;
    while(right>=0){
        res+=word[right];
        right--;
    }
    return res;
}
function reverseEachWord(str){
    let words = str.split(' ');
    
    let res = words.map((word)=>{
        return reverse(word);
    })
    
    return res.join(' ');
}

console.log(reverseEachWord(str));