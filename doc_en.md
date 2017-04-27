In an application based on the Flux architecture, the following main components are encountered: view, action, store and dispatcher. The essence of their interaction is simple - the action emits an event to the dispatcher which, in turn, delivers the event to the store. Stores are registered in the dispatcher to receive certain events. The example below shows how ButtonAction emits an event to the dispatcher:

GetTextFromServer: function (number) {
  AppDispatcher.dispatch ({
    Type: "GET_TEXT",
    Number: number
  });
}

The event has a type and a parameter. At the same time, the DataStore is registered to receive events:

AppDispatcher.register (function (action) {
  switch (action.type) {
  case "RECEIVE_TEXT":
    console.log ('Text received');
    DataStore.setCurrentText (action.text);
    DataStore.emitChange ();
  break;
  case "GET_TEXT":
    console.log ('The button was clicked store.');
    var number = action.number;
    DataStore.getTextFromServer (number);
  break;
  default:
  }
});
As we can see, the store was registered to receive two types of events: RECEIVE_TEXT and GET_TEXT. When it receive these events, it performs certain functions. It's important to pay attention to the emitChange procedure. It emit the event signaling that some changes have occurred. In this example, this function is called when you receive text from the server. Views subscribe to this event by registering the callback functions. For example, this:

DataStore.addChangeListener (this.onChange);

...

  onChange () {
  console.log ('The button was clicked component.');
  this.setState ({
    text: DataStore.getCurrentText ()
  });
  console.log (this.state.text);
  }

This binding of the receiver and the transmitter of events occurs outside the dispatcher.
Actually, that's all. This is the essence of the flux pattern. Then there are the details. A view calls an action to trigger an event that is caught by the store, which, after executing certain functions, triggers the "change" event, which in turn is caught by the view.
The variable DataManager, which is used in this example, is essentially the same action that emits an event to the dispatcher when text is received from the server. What is also caught by the store, and then view.
