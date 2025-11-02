class hashTable{
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
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }else{
            let sameKey = bucket.find(item=>item[0]===key);
            if(sameKey){
                sameKey[1]=value;
            }else{
                bucket.push([key,value]);
            }
        }
    }
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let samekey = bucket.find(item=>item[0]===key);
            if(samekey){
                return samekey[1];
            }else{
                console.log('Key not found');
            }
        }
    }
    delete(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            console.log('key not found')
        }
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket.splice(i,1);
                if(bucket.length===0){
                    bucket = undefined;
                }
                console.log('key removed');
                return;
            }
        }
        console.log('Key not found');
    }
    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,':',this.table[i]);
            }
        }
    }
}
const ht = new hashTable(5);
ht.set('apple',10);
ht.set('orange',20);
ht.set('cherry',30);
ht.set('kiwi',40);
ht.display();
ht.delete('kiwi');
ht.display();
console.log(ht.get('apple'));
