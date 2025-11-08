function sortCharFreq(s){
    const freq = {};
    for(let ch of s){
        freq[ch] = (freq[ch] || 0)+1;
    }
    const sortedChars = Object.keys(freq).sort((a,b)=>freq[b]-freq[a]);
    let result = '';
    for(let ch of sortedChars){
        result+=ch.repeat(freq[ch]);
    }
    return result;
}
let s = 'tree';
console.log(sortCharFreq(s));