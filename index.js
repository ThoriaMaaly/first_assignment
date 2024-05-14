
//   **q1**=========

// function getSum( x,y){

//     console.log(x+y);

// }


//*q2====================


// function checkPalindrome(x) {
//     let arr = x.split('');
//     arr = arr.reverse().join('').toLowerCase();
//     if (arr == x.toLowerCase()) {
//         console.log('Is palindrome...')
//     }
//     else {
//         console.log('NOT palindrome...')
//     }
// }


//q3===================

// function reverseString(x){
//     let arr = x.split('');
//    console.log(arr.reverse().join(''))    ;

// }


//q4****====================
// function findEven(arr) {
//     var evenArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             evenArr.push(arr[i])
//         }
//     }
//     console.log(evenArr)
// }


//q5****===================

// function createDeepCopy(x) {
//     let y = JSON.parse(JSON.stringify(x));
//     return y;

// }


//q6****===============


// function reverseString(x) {
//     var arr = x.split('');
//     var arr2=[]
//     for (var i=0; i<arr.length; i++) {
//       arr2.unshift(arr[i]);
//     }
// console.log( arr2.join(''))
// }
// ********************
// function reverseString(x) {
//     var arr = x.split('');
//     var arr2=[]
//     for (var i=arr.length;  i>=0  ; i--) {
//       arr2.push(arr[i]);
//     }
// console.log( arr2.join(''))
// }



//q7***=========
// function getSumAll(x) {
//     var sum = 0;
//     for (var i = 0; i < x.length; i++) {
//         sum += x[i];
//     }
//     console.log(sum);
// }


//q8****=================
// function getFactorial(x) {
//     console.log('factorial of number ' + x + ' is ' + x);
//     for (var i = x - 1; i >= 1; i--) {

//         console.log('*' + i)


//     }

// }



//q9*====================

// function getAverage(x) {
//     var sum = 0;
//     for (var i = 0; i < x.length; i++) {
//         sum += x[i];
//     }
//     console.log(sum/x.length);
// }

//q10***====================


// function gettIdx(x=[], y) {

//     for (var i = 0; i < x.length; i++) {
//         if (y == x[i]) {
//             return i;
//         }

//     }

// }


//q11***============
 // By using Number method ==> isInteger()------->it return true if it is integer || return false when it is not integer



 //q12***=========================

//  function ageInDayes(age){
//     return age*360 ;
//  }


//q13**==============
// call back function is a function that take another function as a parameter to excute it
// function hello(){
//     console.log('hello....')
// };
// function hi(){
//     console.log('hi....')
// };

// function sayHello(x){
// x();
    
// }
// sayHello(hi)