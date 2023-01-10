function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total); //i = numero atual//total: incrementação de cada elemento do array
      console.log(sum);
    } else if (operation === "multiply") {
      const mult = arr.reduce((i, mult) => i * mult);
      console.log(mult);
    }
  } else {
    console.log("Please, put and operation");
  }
}
operations([1, 2, 3]);

operations([1, 2, 3], "sum");
operations([10, 10, 10], "multiply");
