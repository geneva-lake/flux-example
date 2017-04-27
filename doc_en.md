In an application based on the Flux architecture, the following main components are encountered: view, action, store and dispatcher. The essence of their interaction is simple - the action emits an event to the dispatcher which, in turn, delivers the event to the store. Stores are registered in the dispatcher to receive certain events. The example below shows how ButtonAction emits an event to the dispatcher:

GetTextFromServer: function (number) {<br>
  AppDispatcher.dispatch ({<br>
    Type: "GET_TEXT",<br>
    Number: number<br>
  });<br>
}<br>

The event has a type and a parameter. At the same time, the DataStore is registered to receive events:

AppDispatcher.register (function (action) {<br>
  switch (action.type) {<br>
  case "RECEIVE_TEXT":<br>
    console.log ('Text received');<br>
    DataStore.setCurrentText (action.text);<br>
    DataStore.emitChange ();<br>
  break;<br>
  case "GET_TEXT":<br>
    console.log ('The button was clicked store.');<br>
    var number = action.number;<br>
    DataStore.getTextFromServer (number);<br>
  break;<br>
  default:<br>
  }<br>
});<br>
As we can see, the store was registered to receive two types of events: RECEIVE_TEXT and GET_TEXT. When it receive these events, it performs certain functions. It's important to pay attention to the emitChange procedure. It emit the event signaling that some changes have occurred. In this example, this function is called when you receive text from the server. Views subscribe to this event by registering the callback functions. For example, this:

DataStore.addChangeListener (this.onChange);<br>
<br>
...<br>
<br>
  onChange () {<br>
  console.log ('The button was clicked component.');<br>
  this.setState ({<br>
    text: DataStore.getCurrentText ()<br>
  });<br>
  console.log (this.state.text);<br>
  }<br>
<br>
This binding of the receiver and the transmitter of events occurs outside the dispatcher.
Actually, that's all. This is the essence of the flux pattern. Then there are the details. A view calls an action to trigger an event that is caught by the store, which, after executing certain functions, triggers the "change" event, which in turn is caught by the view.
The variable DataManager, which is used in this example, is essentially the same action that emits an event to the dispatcher when text is received from the server. What is also caught by the store, and then view.
