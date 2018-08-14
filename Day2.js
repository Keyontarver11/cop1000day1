
// class Toilet{
//     constructor(pee,poop){
//         this.pee = "pee";
//         this.poop = "poop";
//         this.state = {notflushed:true}
//     }
    
// }

// let toilet = new Toilet("yellow", "brown");

// toilet.prototype.flush = function flushed(){
//     console.log(flush);
//     this.state.flush = "flushed"
// }

// function Body{
//     constructor(muscles,fat){
//         this.muscles = "swole";
//         this.fat = "fat";
//         this.state = "inshape"
//     }
// }

// lastindexof


// var Stack = function(){
//     this.storage = "";
//     this.capacity = 10;
//     this.size =0;
// }

//     Stack.prototype.push = function(value){
//         if(!value) {
//             return alert('please enter a value'
//         )};

//         if(this.size > this.capacity) {
//             return alert ('stack size exceeded'
//         )};

//         if(value && this.size < this.capacity){
//             this.storage += '|' + value;
//             this.size++;
//         }
//     }

//     Stack.prototype.pop = function(){
//         if (!this.size) {
//             return alert('the storage is empty');
//         }
//         let last = this.storage.lastIndexOf('|');
//         let lastEntry = this.storage.slice(last + 1);
//         this.storage = this.storage.slice(0, last);
//         this.size--;

//         return lastEntry; 
//     };
   

var Stack = function(){
    this.storage = {};
    this.capacity = 5;
    this.size = 0;
}

// Stack.prototype.push = function(value){
//     if(!value) {
//         return alert('please enter a value'
//     )};

//     if(this.size > this.capacity) {
//         return alert ('stack size exceeded'
//     )};

//     if(value && this.size < this.capacity){
//         this.storage[this.size] = value;
//         this.size++;
//     }
    
// }


// Stack.prototype.pop = function(value){
//     // if (!this.size) {
//     //         return alert('the storage is empty');
//     //     }
//         this.size--;
//         delete this.storage[this.size];
    
// }

Stack.prototype.size = function(value){
   
}

var stack = new Stack();
stack.size();

console.log(stack);