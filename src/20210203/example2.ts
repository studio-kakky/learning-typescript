(() => {
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
  }

  mySearch = (a: string, b: string) => {
    let result = a.search(b);
    return result > -1;
  }

  const mySearch2: SearchFunc = (source: number) => {
    return true
  }

  const myFind = (list: string[], pattern: string, searchFunc: SearchFunc) => {
    return list.find(v => searchFunc(v, pattern))
  }

  myFind(['1', '2'], 'aa', mySearch)

  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ["Bob", "Fred"];

  let myStr: string = myArray[0];

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  interface NotOkay {
    [key: number]: Animal;
    [idx: string]: Dog;
  }

  interface Okay {
    [key: number]: Dog;
    [idx: string]: Animal;
  }

  const animal = { name: 'cat' };
  const dog = { name: 'dog', breed: 'shiba'};

  const aa: NotOkay = {
    'aa': dog,
    0: animal
  }

  interface NumberDictionary {
    [index: string]: number;
    length: number; // ok, length is a number
    name: string; // error, the type of 'name' is not a subtype of the indexer
  }

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  // string[]

  const myArray2: ReadonlyStringArray = ["Alice", "Bob"];
  myArray2[1] = "Mallory"; // error!

  const myArray3: string[] = ['1', '2'];
  myArray3[1] = '3'
})
