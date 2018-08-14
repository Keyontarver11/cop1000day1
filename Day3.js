var Que = function(){
    this.storage = {}
    this.head = 0;
    this.tail = 0;
    this.capacity = 10;
    
}

function alert(test){
    console.log(test);
}



Que.prototype.size = function(head, tail){
    let result = this.tail - this.head;
    
    return result 
};

Que.prototype.enque = function(value){
    if(!value) {
        return alert('please enter a value'
    )};

    if(this.tail > this.capacity) {
        return alert ('que size exceeded'
    )};

    if(value && this.tail < this.capacity){
        this.storage[this.tail] = value;
        this.tail++;
        return this.size();
    }


    
}

Que.prototype.deque = function(){
    let temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;

    return temp; 
}

let que = new Que();
que.enque("go");
que.enque("home");
que.enque("was");
que.enque("dirt");
que.deque();
que.deque();

console.log(que);
console.log(que.size());


