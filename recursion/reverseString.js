let str = 'nivleM'
function reverseString(str,index=0){
    if(str==='' ) return '';
    return reverseString(str.slice(index+1))+str[index];
}
console.log(reverseString(str));