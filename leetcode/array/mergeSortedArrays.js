function mergeSortedArrays(input1,input2){
    let i =0, j = 0;
    let merged = [];
    while(i<input1.length && j<input2.length){
        if(input1[i]<input2[j]){
            merged.push(input1[i]);
            i++;
        }else{
            merged.push(input2[j]);
            j++;
        }
    }
    while(i<input1.length) merged.push(input1[i++]);
    while(j<input2.length) merged.push(input2[j++]);
    return merged;
}
let input1 = [1,2,3,4];
let input2 = [3,4,5,6];
console.log(mergeSortedArrays(input1,input2));