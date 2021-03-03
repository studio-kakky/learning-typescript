/* オプショナル変数の使い方*/
(() => {
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  const createSquare = (config: SquareConfig): { color: string; area: number } => {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }

  //
  let mySquare1 = createSquare({});

  // オブジェクトリテラルだとエラー
  let mySquare2 = createSquare({colour: "red", width: 100});

  // オブジェクトはエラーにならない
  const param = {colour: "red", width: 100};
  let mySquare3 = createSquare(param);

  // オブジェクトだけど、インターフェースに未定義のプロパティのみはエラー
  const param2 = {colour: "red"};
  let mySquare4 = createSquare(param2);
})
