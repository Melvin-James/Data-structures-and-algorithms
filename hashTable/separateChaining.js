class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key,value){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }
        else{
            const sameKey = bucket.find(item=>item[0]===key);
            if(sameKey){
                sameKey[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
    }
    get(key){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKey = bucket.find(item=>item[0]===key);
            if(sameKey){
                return sameKey[1];
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const itemIndex = bucket.findIndex(item=>item[0]===key);
            if(itemIndex !== -1){
                bucket.splice(itemIndex,1);
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const ht = new HashTable(5);
ht.set('apple',10);
ht.set('orange',20);
ht.set('cherry',30);
ht.set('kiwi',40);
ht.display();
console.log('----------------')
ht.remove('kiwi');
ht.display();
console.log(ht.get('apple'));
