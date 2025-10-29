let input = ["abc", "def", "ghi"];
function reverseArrayAndElementsOfArray(input){
    left = 0;
    right = input.length-1;
    while(left < right){
        [input[left],input[right]]=[input[right],input[left]];
        left++;
        right--;
    }
    for(let i=0;i<input.length;i++){
        input[i] = reverseElements(input[i]);
    }
    return input;
}
function reverseElements(char){
    if(char === "")return "";
    return reverseElements(char.slice(1))+char[0];
}
console.log(reverseArrayAndElementsOfArray(input));

//Time - O(n * m);
//space - O(m);