const students = [
  { id: 1, name: "Amit",  marks: 78 },
  { id: 2, name: "Neha",  marks: 92 },
  { id: 3, name: "Ravi",  marks: 65 },
  { id: 4, name: "Priya", marks: 85 },
  { id: 5, name: "Kiran", marks: 70 }
];
function mergeSort(students){
    if(students.length<2){
        return students;
    }
    let mid = Math.floor((students.length)/2);
    let leftArray = students.slice(0,mid);
    let rightArray = students.slice(mid);
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}
function merge(leftArray,rightArray){
    let sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0].marks<=rightArray[0].marks){
            sortedArray.push(leftArray.shift());
        }else{
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray,...leftArray,...rightArray];
}
console.log(mergeSort(students));