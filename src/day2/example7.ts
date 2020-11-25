(() => {
  interface Point {
    x: number;
    y: number;
  }

  interface ExtendedPoint {
    x: number;
    y: number;
    z: number;
  }

  function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }

  const point = { x: 12, y: 26 };
  printPoint(point);
  const point3: ExtendedPoint = { x:12, y: 25, z: 12}
  printPoint(point3);

})()
