import Rx from "rxjs";

Rx.Observable.of(1, 2, 3, "Four", 5).subscribe(a => console.log(a));