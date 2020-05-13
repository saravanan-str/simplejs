function reverseInteger(number) {
  return (
    parseInt(number.toString().split("").reverse().join("")) * Math.sign(number)
  );
}
const num = -67;
console.log(reverseInteger(num));
