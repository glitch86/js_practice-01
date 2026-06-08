const findLargest = (a, b, c) => {
  let largest;
  if (a > b && a > c) {
    largest = a;
  } else if (b > a && b > c) {
    largest = b;
  } else {
    largest = c;
  }
  return largest;
};

console.log(findLargest(3, 7, 5));
