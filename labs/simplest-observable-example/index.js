var observable = Rx.Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.completed();
});

var observer = Rx.Observer.create(
  // onNext
  function(value) {
    console.log('Next: ' + value);
  },

  // onError
  function(error) {
    console.log('Error: ' + error);
  },

  // onCompleted
  function() {
    console.log('Completed');
  }
);

var subscription = observable.subscribe(observer);
