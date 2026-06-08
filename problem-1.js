const swap = (a, b) => {
  [a, b] = [b, a];
  return [a, b];
};

console.log(swap(5, 10));

// oneliner version

// const onelinerSwap = (a, b) => [b, a];

// console.log(onelinerSwap(5, 10));
