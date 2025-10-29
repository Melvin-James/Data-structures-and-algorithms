function thirdLargestFromUnsortedArray(input){
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for(let i=0;i<input.length;i++){
        if(input[i]>first){
            third = second;
            second = first;
            first = input[i];
        }else if(input[i]>second && input[i]<first){
            third = second;
            second = input[i];
        }else if(input[i]>third && input[i]<second && input[i]<first){
            third = input[i];
        }
    }
    return third;
}
let input = [90,23,45,12,50];
console.log('Third larget element in array:',thirdLargestFromUnsortedArray(input));