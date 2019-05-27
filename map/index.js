import Rx from "rxjs";

const range = Rx.Observable.range(1, 9);

range.map(n => n * n)
    .subscribe(e => console.log(e));

const notificationAPI = Rx.Observable.interval(1000);

notificationAPI
    .mapTo({ type: "NOTIFICATION" })
    .subscribe(a => console.log(a));