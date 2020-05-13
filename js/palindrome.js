function isPalindrom(stringInput) {
  return stringInput === stringInput.split("").reverse().join("");
}

const stringInput = "aba";
console.log(isPalindrom(stringInput));

function isPalindromEveryMethod(stringInput) {
  return stringInput.split("").every((character, index) => {
    return character === stringInput[stringInput.length - index - 1];
  });
}

const stringInputEvery = "aba";
console.log(isPalindromEveryMethod(stringInputEvery));
