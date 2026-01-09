let array = [12,34,5,8,90];
function linearSearch(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return true;
        }
    }
    return false;
}
console.log(linearSearch(array,90));
