var observable = Rx.Observable.create(function(observer) {
});

var observer = Rx.Observer.create(
  function(value) {},
  function(error) {},
  function() {}
);

var subscription = observable.subscribe(observer);
