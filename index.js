


//one
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  const str = "homepage";
  const reversedStr = reverseString(str);
  console.log(reversedStr);
  

//question two

function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  
  const sentence = "I am happy";
  const numVowels = countVowels(sentence);
  console.log(numVowels);
  
//question 3
const readline = require("readline");
function calculateSum(inputString) {
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
}

promptUser()
  .then((userInput) => {
    return calculateSum(userInput);
  })
  .then((result) => {
    console.log("Sum of the entered numbers:", result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    rl.close();
  });



 //question 4
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
  const word = "wheelbarrow";
  const palindrome = isPalindrome(word);
  console.log(palindrome);
  


  //five

  function chunkArray(array, size) {
    const chunkedArray = [];
    let index = 0;
  
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunkedArray;
  }
  
  const array1 = [3, 2, 4, 3, 6, 5, 8, 7];
  const chunkSize1 = 2;
  const result1 = chunkArray(array1, chunkSize1);
  console.log(result1);
  
  const array2 = [4, 2, 7, 5, 7, 7];
  const chunkSize2 = 3;
  const result2 = chunkArray(array2, chunkSize2);
  console.log(result2);

  
  // question six



  function reverseInteger(num) {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString) * Math.sign(num);
  }
  
  const num1 = 500;
  const reversedNum1 = reverseInteger(num1);
  console.log(reversedNum1);
  
  const num2 = -58;
  const reversedNum2 = reverseInteger(num2);
  console.log(reversedNum2);
  
  const num3 = -70;
  const reversedNum3 = reverseInteger(num3);
  console.log(reversedNum3);
  
  const num4 = 34;
  const reversedNum4 = reverseInteger(num4);
  console.log(reversedNum4);
  

