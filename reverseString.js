/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

Examples:

Input: "coderbyte"
Output: etybredoc

Input: "I Love Code"
Output: edoC evoL I

Input: "Hello World and Coders"
Output: sredoC dna dlroW olleH
*/

function reverseStr(str) { 

  let output = "";
  
  for (let i = str.length - 1; i >= 0; i--){
    output += str[i];
  };

  str = output;

  return str; 

};
   
console.log(reverseStr("Hello World"));
