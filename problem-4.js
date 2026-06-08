const toFahrenheit = (temp) => {
  let fahrenheit = temp * 1.8 + 32;
  return fahrenheit;
};

console.log("Temperature in Fahrenheit: ", toFahrenheit(0));
console.log("Temperature in Fahrenheit: ", toFahrenheit(100));
