// [1 , 2 , 3] [4 , 5 , 6];
// [1 , 2 , 3]

// function median(nums1 , nums2){
//     let merged = [];
//     let i = 0;
//     let j = 0;
//     let median = 0;
//     while(i < nums1.length && j < nums2.length){
//         if(nums1[i] < nums2[j]){
//             merged.push(nums1[i]);
//             i++;
//         } else {
//             merged.push(nums2[j]);
//             j++;
//         }
//     }

//     if(i === nums1.length){
//         merged = merged.concat(nums2.slice(j));
//     }

//     if(j === nums2.length){
//         merged = merged.concat(nums1.slice(i));
//     }

//     if(merged.length % 2){
//         median = merged[Math.floor(merged.length / 2)]
//     } else {
//         median = (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2
//     }

//     return median;
// }

// Stack

// LIFO - Last in first out
// push , pop

// unshift , shift

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.length = 0
//     }
// }

// unshift
// shift
// peek => сүүлд оруулсан node-г буцаана

// QUEUE => FIFO => First in first out;

// push (enqueue)
// shift (dequeue)
// peek => hagiin ehend bga node butsah

// 'abca'; => 3

// i = 0 ====> 'a' 

// j = 1 ====> 'ab'
// j = 2 ====> 'abc'
// j = 3 ====> break;

// i = 1 ====> 'b'

// j = 2 ====> 'bc'
// j = 3 ====> 'bca'


// function longestSubString(str){
//     let result = 0;

//     for(let i = 0; i < str.length; i++){
//         let subString = str[i];
//         for(let j = i + 1; j < str.length; j++){
//             if(subString.includes(str[j])){
//                 break;
//             } else {
//                 subString += str[j];
//             }
//         }
//         let maxLength = subString.length;
//         result = Math.max(maxLength , result);
//         if(result > str.slice(i + 1).length){
//             break;
//         }
//     }

//     return result;
// }

// 100
// 1 - 100
// (1 + 100) * 50 
// function sum(num){
//     if(num === 1) return num;
//     return num + sum(num - 1);
// }