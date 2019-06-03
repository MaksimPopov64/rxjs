import Rx from "rxjs";

const triendsAPI = Rx.Observable
    .interval(1000)
    .map(i => ({name: `Friend #${i}`, mutualFriends: i*2 + 2}))
    .pluck("mutualFriends")
    .subscribe(a => console.log(a));
