(() => {
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square2 extends Shape, PenStroke {
    sideLength: number;
  }

  let square = {} as Square2;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;
})();

(() => {
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }

  let counter = getCounter();
  counter(10);
  counter.reset();
  counter.interval = 5.0;


  const a = () => {}
  a.prop = 1;

})();
