// Sort the linked list using merge sort
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{
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
    display(){
        if(!this.head) return;
        let result = '';
        let current = this.head;
        while(current){
            result+=current.value+' -> ';
            current = current.next;
        }
        console.log(result+'null');
    }

    sort(){
        this.head = this.mergeSort(this.head);
    }

    merge(left, right){
        let dummy = new Node(-1);
        let tail = dummy;
        while(left && right){
            if(left.value <= right.value){
                tail.next = left;
                left = left.next;
            }else{
                tail.next = right;
                right = right.next;
            }
            tail = tail.next;
        }
        if(left){
            tail.next = left;
        }
        if(right){
            tail.next = right;
        }
        return dummy.next;
    }

    mergeSort(head){
        if(!head || !head.next){
            return head;
        }

        let slow = head;
        let fast = head;
        let prev = null;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        
        prev.next = null;

        let left = this.mergeSort(head);
        let right = this.mergeSort(slow);


        return this.merge(left, right);
    }
}

const list = new linkedList();

list.insert(4);
list.insert(2);
list.insert(1);
list.insert(3);
list.insert(7);
list.insert(5);

console.log("Original List:");
list.display();

list.sort();

console.log("Sorted List:");
list.display();