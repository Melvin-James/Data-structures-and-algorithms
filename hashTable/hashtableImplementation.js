class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }
    set(key,value){
        let index = this.hash(key);
        this.table[index] = value;
    }
    get(key){
        let index = this.hash(key);
        return this.table[index];
    }
    delete(key){
        let index = this.hash(key);
        if(this.table[index]!==undefined){
            console.log(`deleted : ${key} ${this.table[index]}`);
            this.table[index] = undefined;
        }else{
            console.log(`key ${key} not found`);
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,':',this.table[i]);
            }
        }
    }
}
const ht = new hashTable(5);
ht.set('apple',120);
ht.set('banana',100);
ht.set('cherry',90);
ht.set('kiwi',200);
ht.set('orange',140);
ht.display();
console.log('After deletion:');
console.log(ht.delete('kiwi'));
ht.display();

//Here no collison handling and thereby the hash function resolves the both 
//kiwi and orange keys into same index, and the value of orange rewrites the 
//the data of kiwi.