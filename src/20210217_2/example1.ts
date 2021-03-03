
(() => {
// 引数の型はany
  function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    // number, string以外はエラーを投げる
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }

  // 問題なく動く
  padLeft("Hello world", 4);
  // 動かすとエラーになるが、コンパイル時はエラーにならない
  padLeft("Hello world", true);
})();

(() => {
  // 直和型で string | number
  function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }

    return padding + value;
  }

  padLeft("Hello world", true);
})();

