function logRectInfo(topLeft, bottomRight) {
  let area = (topLeft[1] - bottomRight[1]) * (bottomRight[0] - topLeft[0]);
  let perimeter =
    (topLeft[1] - bottomRight[1] + (bottomRight[0] - topLeft[0])) * 2;
  if (topLeft < 0 || bottomRight < 0) {
    Math.abs(topLeft[0]);
    Math.abs(bottomRight[1]);
  }
  console.log(`Area = ${area} & Perimeter = ${perimeter}`);
}

logRectInfo([0, 5], [3, 2]);
