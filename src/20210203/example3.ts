(() => {
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }

  class Clock implements ClockInterface {
    currentTime = new Date()
    constructor(h: number, m: number) {}

    setTime(d: Date) {
      this.currentTime = d;
    }
  }

  class Clock2 implements ClockInterface {
    constructor(h: number, m: number) {}

    get currentTime(): Date {
      return new Date()
    }

    setTime(d: Date) {

    }
  }
})();

(() => {
  interface ClockConstructor {
    new (hour: number, minute: number): any;
  }

  class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) {}
  }
})();

(() =>{
  interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }

  interface ClockInterface {
    tick(): void;
  }

  function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
  ): ClockInterface {
    return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("beep beep");
    }
  }

  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("tick tock");
    }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
})();
