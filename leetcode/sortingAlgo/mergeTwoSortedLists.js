class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
function mergeSortedList(list1,list2){
    let dummy = new Node(-1);
    let tail = dummy;
    while(list1 && list2){
        if(list1.val<list2.val){ //here val because leetcode accepts val not value
            tail.next = list1;
            list1 = list1.next;
        }else{
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 || list2;
    return dummy.next;
}
console.log(mergeSortedList(list1,list2));