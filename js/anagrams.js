function isAnagram(str1, str2) {
  const map1 = getCharMap(str1);
  const map2 = getCharMap(str2);
  if (Object.keys(map1).length !== Object.keys(map2).length) return false;
  for (let achar in map1) {
    if (map1[achar] !== map2[achar]) return false;
  }
  return true;
}

function getCharMap(str) {
  var map = {};
  for (let char of str) {
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }
  return map;
}
function isAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const str1 = "hello";
const str2 = "llohe";
console.log(isAnagram(str1, str2));
console.log(isAnagrams(str1, str2));
