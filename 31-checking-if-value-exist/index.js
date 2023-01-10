function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum = arr.reduce(function (i, total) { return i + total; }); //i = numero atual//total: incrementação de cada elemento do array
            console.log(sum);
        }
        else if (operation === "multiply") {
            var mult = arr.reduce(function (i, mult) { return i * mult; });
            console.log(mult);
        }
    }
    else {
        console.log("Please, put and operation");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([10, 10, 10], "multiply");
