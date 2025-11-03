function stringTransformation(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        for(let j=0;j<=i;j++){
            result+=str[i];
        }
        result+='-';
    }
    return result;
}
console.log(stringTransformation('APPLE'));
