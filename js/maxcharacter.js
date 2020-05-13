function findMaxmimumRepeatingCharacters(str) {
  var map = {};
  for (let char of str) {
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }
  return Object.keys(map).find(
    (key) => map[key] === Math.max.apply(null, Object.values(map))
  );
}

const str = "abbcccdddddddddddd    ddderwerereddddddddddd";
console.log(findMaxmimumRepeatingCharacters(str));
