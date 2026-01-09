let array = [6,20,8,4,2];
function sumOfArray(array,index=0,sum=0){
    if(index === array.length){
        return sum;
    }
    return sumOfArray(array,index+1,sum+array[index]);
}
console.log(sumOfArray(array));