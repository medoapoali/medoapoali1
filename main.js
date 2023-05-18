
// function logical_and(a, b) {
//   // write your code here
//   if(a === true && b === false){
//       console.log(false)
//   }else if(a === true && b === true){
//       console.log(true)
//   }else{false}
//   return true === false
// }
// console.log(logical_and())

// function search(word, character) {
//   // write your code here
  
// }
// function addCommasAndUnderscore(num) {
//   // Convert To String
//   let result = num.toLocaleString(); // Try Another Solution With RegExp
//   // Convert To Array
//   result = result.split("");
//   // Update The Last Comma Value
//   result[result.length - 4] = "_";
//   // Convert To String
//   result = result.join("");
//   return result;
// }

// console.log(addCommasAndUnderscore(120)); // 120
// console.log(addCommasAndUnderscore(1530)); // 1_530
// console.log(addCommasAndUnderscore(120510650)); // 120,510_650
// console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
// console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
//////////////////////////////////////////////////////////////
// function removeCharFrom(word, c){
//   return word.split("").filter(function (sh){
//     return sh !== c.toLowerCase() && sh !== c.toUpperCase()
//   }).join("")
// }

// console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
// console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
// console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));
// function removeCharFrom(word, c) {
//   return word.split("").filter((x) => x !== c.toLowerCase() && x !== c.toUpperCase()).join("");
// }
////////////////////////////////////////////////////////////////
// function addCommasAndUnderscore(num){
//   let result = num.toLocaleString()
//   result = result.split("")
//   result[result.length - 4 ] = "_"
//   result = result.join("")
//   return result
// }


// console.log(addCommasAndUnderscore(120)); // 120
// console.log(addCommasAndUnderscore(1530)); // 1_530
// console.log(addCommasAndUnderscore(120510650)); // 120,510_650
// console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
// console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032


// function logical_and(a,b) {
//   // write your code here
//   if(a != b){
//     console.log(false)
//   }else {
//     console.log(true)
//   }
// }
// logical_and(true,false)
// function match_arrays(array1, array2) {
//   // write your code here
//   //للمتقدمين - لا تعمل
//   return array2.reduce((a, b) => a && array1.includes(b), true);
  //حل Bakr A
  // if (arr1.length == arr2.length) {
  //     return results = arr1.every(function (ele) {
  //         return arr2.includes(ele);
  //     });
  // }
  function is_same(name1, name2) {
    // write your code here
    
}