// EXERCISES
// Write a recursive function that takes one numeric parameter, n, and returns a string with the numbers n down to 0, separated by spaces.

// let X = function(n){
//     if(n > 0 )
//     return n + "yup"
// }

// Write a function 'Z' that takes two arguments, 'x and y', and multiplies each x value into by y and returns an array of the values.

// function recursiveMultiplier(arr, num){
//     let l = arr.length;
//     let c = 0;
//     let a = [];
//     function multiply(){
//         if(c >= l){
//             return a;
//         }
//         a.push(arr[c] * num );
//         c++
//         return multiply();
//     }
//     return multiply();
// }
// console.log(recursiveMultiplier([3,6,7],2));

// Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

// function exponent(base, expo) {
//     if(expo == 0) {
//         return 1;
//     } else {
//         return base * exponent(base, expo - 1);
//     }
// }

// console.log(exponent(2,4));

// Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse. Show implementation with helper function that builds array and a standard implementation.

// function recursiveReverse(arr){
//     let index = arr.length - 1;
//     let array = [];

//     function reverse1(){
//         if(index < 0){
//             return array;
//         }
//         array.push(arr[index]) 
//         index--;
//         return reverse1();
//     }
//     return reverse1();

// }
// console.log(recursiveReverse([4, 5, 6, 7]));

// Implement a function that flattens a nested array. flatten([ [[[[55]]]], 1, [2] , ["thug life", [[4]]] ]); => [1,2,3,4]

// let x = [ [[[[55]]]], 1, [2] , ["thug life", [[4]]] ];
// console.log(flatten(x))

// function flatten(arr){
//     let result = [];
    
//     function recursive(arr){
//        for(let i = 0; i < arr.length; i++){
//         let element = arr[i];
            
//         if(Array.isArray(element)){
//                 recursive(element)
//             }
//             else {
//                 result.push(element)
//             }
//         }  
//     }    
//     recursive(arr);
//     return result;
    
// }

// Create a helper function(arr).
//    result = []

//    declare recursive function(arr)
//      - loop
//        - if(Array.isArray(arr[i]))
//            recursive(arr[i]);
//          else
//            result.push(arr[i])

// function flatten(x){
//     for(var i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             recursion(arr[i])
//         }
//     }

// }

// Implement a function that will reverse a string recursively. 
// reverse('abcdefg') => 'gfedcba'

// function reverse(str) {
//     if (str === "") { 
//         return "";
//     } else { 
//         return reverse(str.substr(1)) + str.charAt(0);           
//     }
// }
// console.log(reverse("abcdef"));



// for(var i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//         recursivef(arr[i])
//     }
// }


