function buildChunks(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunkedArray[chunkedArray.length - 1];
    if (!last || last.length === chunkSize) {
      chunkedArray.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkedArray;
}

function buildChunksWhileLoop(array, chunkSize) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedArray;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 2;
console.log(buildChunks(array, chunkSize));
console.log(buildChunksWhileLoop(array, chunkSize));
