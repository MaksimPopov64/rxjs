import Rx from "rxjs";

const ticker = Rx.Observable.interval(1000);
const timer = Rx.Observable.timer(1000, 2000);

ticker.subscribe(a=>console.log(a));
timer.subscribe(a=> console.log(a));