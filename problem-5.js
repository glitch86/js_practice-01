const typeChecker = (num) => {
  if (num > 0) {
    return "Provided number is Positive.";
  } else if (num < 0) {
    return "Provided number is Negative.";
  } else {
    return "Provided number is Zero";
  }
};

console.log(typeChecker(5));
console.log(typeChecker(-5));
console.log(typeChecker(0));
