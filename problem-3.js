const findLargest = (a, b, c) => {
  let largest;
  if (a > b) {
    a > c ? (largest = a) : (largest = c);
  } else if (b > a) {
    b > c ? (largest = b) : (largest = c);
  }

  return largest;
};

console.log(findLargest(3, 7, 5));
