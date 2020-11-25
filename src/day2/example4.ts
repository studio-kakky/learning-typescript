(() => {
  type FishType = 'suzuki' | 'maguro' | 'aji'
  const fish1: FishType = 'suzuki';
  const fish2: FishType = 'aji';

  type NumberOrString = number | string

  const num1: NumberOrString = 1
  const num2: NumberOrString = '2'

  interface Foo {
    name: string
    id_str: string
  }

  interface Bar {
    name: string
    id: number
  }

  type MyUnion = Foo | Bar

  const unionVar1: MyUnion = { name: 'foo', id_str: '1' }
  const unionVar2: MyUnion = { name: 'bar', id: 1 }
})()
