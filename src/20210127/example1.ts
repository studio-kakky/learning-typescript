const apiFetch = (): Promise<void> => {
  return Promise.resolve();
}


const promise = apiFetch()
  .then(() => {
    // 通常の処理
  })
  .catch((err): never => {
    if (err.status === 404) {
      throw new Error('not found')
    }

    throw new Error('internal server error')
  })

const create = (o: object | null) => {};

create({})
create(null)


let someValue: unknown = "this is a string";
let strLength = (someValue as string).length;
let strLength2 = (<string>someValue).length
