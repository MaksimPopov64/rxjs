import Rx from "rxjs";

const interval = Rx.Observable.interval(400);

interval.map(n => n * n)
    .do(n => console.log("fhhrr"))
    .map(n => n / 3)
    .subscribe(a => console.log(a));