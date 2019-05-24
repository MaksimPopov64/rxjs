import Rx from "rxjs";

const array = [1, 1, 2, 3, 5, 8, 13, 21];
const promise = new Promise((res, reject) => res(array));

function* fibonacciGenerator() {
    let a = 1;
    let b = 1;
    while (true) {
        let c = a + b;
        yield c;
        a = b;
        b = c;
    }
}

Rx.Observable.from(fibonacciGenerator())
    .take(20)
    .subscribe(a => console.log(a));