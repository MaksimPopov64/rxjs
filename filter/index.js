import Rx from "rxjs";

const range = Rx.Observable.range(1, 9);

range
    .filter(e => e % 2 == 0)
    .subscribe(a => console.log(a));
