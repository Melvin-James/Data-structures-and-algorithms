function freqOfCharInStr(str){
    const freq = {};
    for(let i=0;i<str.length;i++){
        freq[str[i]]=(freq[str[i]] || 0)+1;
    }
    return freq;
}
console.log(freqOfCharInStr('melvinjames'));