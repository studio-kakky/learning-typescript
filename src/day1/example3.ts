(()=> {
  interface User {
    name: string;
    id: number;
  }

  class UserClass {
    constructor(public name: string, public id: number) {
      // noop
    }
  }

  const getUser = (name: string): User => {
    return {
      name,
      id: Math.floor(Math.random() * 100000),
    }
  }

  const convertSafelyToNumber = (prop: string): number => {
    const converted = parseInt(prop, 10)

    if (isNaN(converted)) {
      return 0;
    }

    return converted;
  }

  convertSafelyToNumber('1');

  const user: User = new UserClass('name', 1);
  console.log(user.id);

  const user1 = getUser('name');
  console.log(user1)
})()
