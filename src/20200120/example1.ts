let isDone: boolean = true;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${decimal}`;

let list: number[] = [1,2,3];
let list2: Array<string> = ['1'];

let keyValue: [string, number] = ['key1', 2];

enum TrafficColor {
  Red = 2,
  Yellow,
  Blue
}

const currentColor = TrafficColor.Red

const someFunc = (color: TrafficColor) => {
  if (color === TrafficColor.Red) {
    return 'stop';
  }

  if (color === TrafficColor.Blue) {
    return 'go'
  }

  return 'attention'
}

let notSure: unknown;
let anyObj: any;

interface A {
  prop1: number;
  prop2: string;
}

interface B {
  bprop1: number;
  bprop2: string;
}

anyObj.someProp = 1

enum Result {
  Fault,
  Success
}

const warnUser = (a: string): Result => {
  if (!a) {
    return Result.Fault
  }

  return Result.Success
}

let u: undefined = undefined;
let n: null = null;
let number = 1

u = null;
n = undefined;
number = null;

/* --strictNullChecks */

let num1: number = 1
num1 = null // エラーになる

let num2: number | null | undefined = 1
num2 = null

let numberList = [1,2,3,4]

const func2 = (max: number): number => {
  const found = numberList.find(v => v > max); // エラーになる
  return found !== undefined ? found : 0;
}
