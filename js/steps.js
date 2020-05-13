function buildSteps(steps) {
  for (let row = 0; row < steps; row++) {
    let completeRowString = " ";
    for (let column = 0; column < steps; column++) {
      if (column <= row) {
        completeRowString += "#";
      } else {
        completeRowString += " ";
      }
    }
    console.log(completeRowString);
  }
}

buildSteps(5);
