const printLabel = (labeledObj: { label: string }): void => {
  console.log(labeledObj.label);
}

printLabel({ label: 'aaa' });
const myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/** -------- **/

interface LabeledValue {
  label: string;
}

const printLabel2 = (labeledObj: LabeledValue): LabeledValue => {
  console.log(labeledObj.label);
  return labeledObj
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);

/**/

interface SquareConfig {
  color?: string;
  width?: number;
}

const createSquare = (config: SquareConfig): { color: string; area: number } => {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({});

const abc: { prop1: string} = { prop1: 'a'};
abc.prop1 = '1223';

interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 1, y: 2};

const arrayA: number[] = [];
arrayA.push(1); // [1]

const arrayB: ReadonlyArray<number> = []
arrayB.concat(2);


