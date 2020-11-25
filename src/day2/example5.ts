(() => {

  interface Foo {
    name: string
    id_str: string
  }

  interface Bar {
    name: string
    id: number
  }

  const char = 'a'
  typeof char // 'string'

  const getId = (param: Foo | Bar): string => {
    if (param.hasOwnProperty('id_str')) {
      return (param as Foo).id_str
    }

    return (param as Bar).id.toString()
  }

  console.log(getId({ name: 'aaa', id_str: 'id'}))
  console.log(getId({ name: 'aaa', id: 1}))


  const wrapInArray = (obj: string | string[]): string[] => {
    if (typeof obj === "string") {
      return [obj];
    } else {
      return obj;
    }
  }
})()
