function capitaizeEachFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const word = "hello saravnaan";
console.log(capitaizeEachFirstLetter(word));
