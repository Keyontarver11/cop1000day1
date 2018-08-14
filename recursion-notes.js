// function reverse(str) {
//     if (str === "") {
//       return "";
//     }
//     else {
//       return reverse(str.substr(1)) + str.charAt(0);
//     }
//    }

//    console.log(reverse("abcdef")); // "fedcba"

//    function reverse(str) { // 1
//     if ("abcdef" === "") { // false
//       return ""; // no
//     }
//     else {
//       return "fedcba";
//     }
//    }

//    function reverse(str) { // 2
//     if ("bcdef" === "") { // false
//       return ""; // no
//     }
//     else {
//       return "fedcb";
//     }
//    }

//    function reverse(str) { // 3
//     if ("cdef" === "") { // false
//       return ""; // no
//     }
//     else {
//       return "fedc";
//     }
//    }

//    function reverse(str) { // 4
//     if ("def" === "") { // false
//       return ""; // no
//     }
//     else {
//       return "fed";
//     }
//    }

//    function reverse(str) {
//     if ("ef" === "") { // false
//       return ""; // no
//     }
//     else {
//       return "fe";
//     }
//    }

//    function reverse(str) {
//     if ("f" === "") { // fasle
//       return ""; // no
//     }
//     else {
//       return "f";
//     }
//    }

//    function reverse(str) {
//     if ("" === "") { // true
//       return ""; // yes
//     }
//     else {
//       return reverse(str.substr(1)) + str.charAt(0);
//     }
//    }

//    function exponent(base, expo) {
//     if(2 == 0) {
//         return 1;
//     } else {
//         return base * exponent(base, 2- 1);
//     }
// }
//    function exponent(2, 4) {
//     if(2 == 0) { //false
//         return 1;//no
//     } else {
//         return base * exponent(base, 2- 1);
//     }
// }
//    function exponent(base, expo) {
//     if(2== 0) {
//         return 1;
//     } else {
//         return base * exponent(base, 2- 1);
//     }
// }
//    function exponent(base, expo) {
//     if(2== 0) {
//         return 1;
//     } else {
//         return base * exponent(base, 2- 1);
//     }
// }
//    function exponent(base, expo) {
//     if(2== 0) {
//         return 1;
//     } else {
//         return base * exponent(base, 2- 1);
//     }
// }
//    function exponent(base, expo) {
//     if(2== 0) {
//         return 1;
//     } else {
//         return base * exponent(base, 2- 1);
//     }
// }
// console.log(exponent(2,4));

// bubbleSort(arr){
//   for i = 0; i < arr.length - 1 ; i++
//     for k = i; i arr.length; k++
//       if arr[i] < arr[k]
//         temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp
// //WAY TO SWITCH
//         [arr[i],arr[k]] = [arr[k],arr[i]]
// }

// function bubbleSort(arr){
//   for( i = 0; i < arr.length - 1; i++){
//     for(k = i + 1; k < arr.length; k++){
//       if(arr[i] > arr[k]){
//         [arr[i],arr[k]] = [arr[k],arr[i]]
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort(x));

// function selectionSort(arr){
//   let sorted = []
//   let pushed = {}

//   for(let i = 0; i < arr.length; i++){
//     let smallest = Infinity;
//     for(let k = 0; k < arr.length; k++){
//       if(arr[k] < smallest && !pushed[arr[k]]){
//         smallest = arr[k];
//       }
//     }

//   }
// // }
// let x = [3, 2, 4, 6, 8, 9, 7, 5, 4, 10];

// function selectionSortIP(arr) {
//   for (i = 0; i < arr.length - 1; i++) {
//     let s = i;
//     for(k = i + 1; k < arr.length; k++) {
//       if(arr[k] < arr[s]){
//         s = k;
//       }
//     }

//     }

//   return arr;
// }

// function insertionSort(arr) {
//   let index = 0;
//   let array = [];
//   while (index < arr.length) {
//     if (array.length === 0 || arr[index] > array[array.length - 1]) {
//       array.push(arr[index]);
//       index++;
//     }
//     for (var i = 0; i < array.length; i++) {
//       if (arr[index] <= array[i]) {
//         array.splice(i, 0, arr[index]);
//         index++;
//         break;
//       }
//     }
//   }

//   return array;
// }

//INPLACE
// function insertionSort(array) {
//   var length = array.length;

//   for(var i = 1, j; i < length; i++) {
//     var temp = array[i];
//     for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
//       array[j+1] = array[j];
//     }
//     array[j+1] = temp;
//   }

//   return array;
// }

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)

// function merge (leftSorted, rightSorted) {
//   let l = 0;
//   let r = 0;
//   let output = [];

//   console.log(leftSorted, rightSorted);

//   while (output.length < (leftSorted.length + rightSorted.length)) {
//     if(l === leftSorted.length) {
//       output = output.concat(rightSorted.slice(r));
//     }
//     else if (r === rightSorted.length) {
//       output = output.concat(leftSorted.slice(l));
//     }
//     else if (leftSorted[l] < rightSorted[r]) {
//       output.push(leftSorted[l]);
//       l++;
//     }
//     else if (leftSorted[l] > rightSorted[r]) {
//       output.push(rightSorted[r]);
//       r++;
//     }
//   }
//   return output;
// }

// function mergeSort(arr) {
//   if(arr.length < 2) {
//     return arr;
//   }

//   let leftArr = arr.slice(0, arr.length / 2);
//   let rightArr = arr.slice(arr.length / 2);

//   let leftSorted = mergeSort(leftArr);
//   let rightSorted = mergeSort(rightArr);

//   return merge(leftSorted, rightSorted);
// }
// console.log(mergeSort(x));
// console.log(merge(leftSorted, rightSorted));

//PICK ELEMENT TO BE THE PIVOT POINT
//QUICK SORT
// arr = [1, 4, 7, 9, 10, 8];

// function swap(hi, lo, arr) {
//   hi = lo;
//   lo = hi;
// }

// function quickSort(arr) {
//   let pivotpoint = arr.length - 1;
//   let pivotlocation = 0;
//   let pivot = arr[pivotpoint];

//   if (arr.length < 2) {
//     return arr;
//   }

//   while (pivotlocation < pivotpoint) {
//     if (arr[pivotlocation] > pivot) {
//       arr[pivotlocation],arr[pivotpoint] = arr[pivotpoint], arr[pivotlocation];
//       pivotpoint--;
//       arr[pivotpoint], arr[pivotlocation] = arr[pivotlocation], arr[pivotpoint];
//     } else {
//       pivotlocation++;
      
      
//       leftArr = arr.slice(0, pivotlocation);
//       rightArr = arr.slice(pivotlocation + 1);
//     }
//   }
//   return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }
// console.log(quickSort(arr))

// pivot_point = arr.length - 1;
// pivot_location = 0;
// pivot = arr[pivot_point];

// while (pivot_location < pivot_point) {
//  if arr[pivot_location] > pivot
//    swap arr[pivot_location] with arr[pivot_point]

//    pivot_point--

//    swap arr[pivot_location] with arr[pivot_point]
//  else
//    pivot_location++
// }

// leftArr = quickarr.slice(0,pivot_location)
// rightArr = arr.slice(pivot_location + 1)

// return leftArr.concat(pivot, rightArr);

// console.log(insertionSort(x));


// class Tree{
//   constructor(value){
//     this.children = [];
//     this.min =value;
//     this.max = value;
//     this.value = value;
//   }
//   insert(value){
//     let node = new Tree(value);
//     this.children.push(node);
//     if(value < this.min){
//       this.min = value;
//     }
//     if(value > this.max){
//       this.max = value;
//     }
//     return node;
//   }
// }

// let tree = new Tree(10)
// let branch = tree.insert(3);
// let branch2 = tree.insert(0);
// let branch3 = tree.insert(3);
// let branch4 = tree.insert(7);
// let branch5 = tree.insert(4);
// let branch6 = tree.insert(6);
// let branch7 = tree.insert(9);
// let branch8 = tree.insert(1);
// let branch9 = tree.insert(3);

// branch.insert(50);

// console.log(tree)

// linked list

// Node
//   constructor(id, value)
//     id = id
//     value = value
//     next = null

// LinkedList
//   constructor
//     head  
//     value     
//     tail  
//     nid = 0
  
//   methods
//     insert(value)   
//     remove(id)    
//     forEach(callback)

    class Node{
      constructor(id,value){
        this.id = id;
        this.value = value;
        this.name = text;
        this.level = number;
        this.phonenumber = number;
        this.next = null;
      }
    }

    class LinkedList{
      constructor(){
        this.head = null;
        this.tail = null;
        this.nid = 0
        this.length = 0
      }
      insert(value){
        const node = new Node(this.nid++, value)
        if (!this.head && !this.tail){
          this.head = node;
          this.tail = node;
        }
        else {
          this.tail.next = node;
          this.tail = node;
        }
        this.length++;
      }

      
      
      remove(id){
        let temp;
        if(this.head === this.tail.id){
          this.tail = null;
          this.head = null;
          this.length--;
        }
        if(this.head.id === id ){
          temp = this.head
          this.head = this.head.next;
          return this.head;
        }
        let node = this.head;
        while (node.next){
          if(node.next.id === id ){
            temp = node.next
            node.next = node.next.next
            if(temp.id === this.tail.id){
              this.tail = node;
            }
            this.length--
            return temp;
          }
          node = node.next;
        }
      }
      forEach(callback){
        let node = this.head

        if(node){
          callback(node);
        
        while(node.next){
          node= node.next
          callback(node)
        }
        }
      }
    }

    let linkedList = new LinkedList();

    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(9);
    linkedList.insert(12);

    console.log(linkedList);
    // console.log(linkedList.remove(3));

    //loop through a object
    for (var key in obj){
      obj[property];
    }

   

    
