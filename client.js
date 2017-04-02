var horizon = Horizon({authType: 'unauthenticated'});

horizon.onReady(function() {
  document.querySelector('h1').innerHTML = '🌃';
});

horizon.connect();

var slackReactions = horizon('slack_events');

var itemsHandler = (items) => {
  items.forEach((item) => {
    console.log(item);
  });
};

var errorHandler = (err) => {
  console.log(err);
};

slackReactions.fetch().subscribe(itemsHandler, errorHandler);
