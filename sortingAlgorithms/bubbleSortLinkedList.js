//Bubble sort using linked list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class List{
    constructor(){
        this.head = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }
    bubbleSort(){
        let swapped ;
        let end = null;
        do{
            swapped = false;
            let current = this.head;
            while(current.next !== end){
                if(current.value > current.next.value){
                    let temp = current.next.value;
                    current.next.value = current.value;
                    current.value = temp;
                    swapped = true;
                }
                current = current.next;
            }
            end = current;
        }while(swapped)
    }
    display(){
        let current = this.head;
        let result = '';
        while(current){
            result+=current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}
const list = new List();
list.insert(90);
list.insert(30);
list.insert(10);
list.insert(50);
list.insert(20);
list.display();
list.bubbleSort();
list.display();