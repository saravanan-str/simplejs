var array1 = [1, 2, 3];
var array2 = [2, 3, 4];

function isArrayEqual(array1, array2) {
  return (
    array1.length === array2.length && array1.every((a1) => array2.includes(a1))
  );
}

isArrayEqual(array1, array2);
