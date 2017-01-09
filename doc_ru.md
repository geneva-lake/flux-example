В приложении, построенном по архитектуре флюкс(Flux) встречаются следующие основные компоненты: представление(view), действие(action), хранилище(store) и диспетчер(dispatcher). Суть их взаимодействия проста - действие эмитирует событие в диспетчер, он, в свою очередь, доставляет событие к хранилищам. Хранилища регистрируются в диспетчере на получение определенных событий. В приведенном примере показано, как ButtonAction эмитирует событие в диспетчер:

getTextFromServer: function(number) {<br>
    AppDispatcher.dispatch({<br>
      type:  "GET_TEXT",<br>
      number: number<br>
    });<br>
}<br>

У события есть тип и параметр. В то же время хранилище DataStore регистрируется для получения событий:

AppDispatcher.register(function (action) {<br>
	switch (action.type) {<br>
	case "RECEIVE_TEXT":<br>
		console.log('Text received');<br>
    DataStore.setCurrentText(action.text);<br>
		DataStore.emitChange();<br>
		break;<br>
  case "GET_TEXT":<br>
    console.log('The button was clicked store.');<br>
    var number = action.number;<br>
    DataStore.getTextFromServer(number);<br>
    break;<br>
	default:<br>
	}<br>
});<br>
</code>

Как мы видим, хранилище зарегистрировалось на получение двух типов событий: RECEIVE_TEXT и GET_TEXT. При получении этих событий оно выполняет определенные функции. Здесь важно обратить внимание на процедуру emitChange. Она запускает событие, что произошли какие-то изменения. В данном примере эта функция вызывается при получении текста с сервера. Представления подписываются на это событие, регистрируя функции обратного вызова. Например, так:

<code>
DataStore.addChangeListener(this.onChange);<br>
<br>
...
<br>
onChange() {<br>
		console.log('The button was clicked component.');<br>
		this.setState({<br>
			text : DataStore.getCurrentText()<br>
		});<br>
		console.log(this.state.text);<br>
}<br>
</code>

Это связывание приемника и передатчика событий происходит вне диспетчера.
Собственно, и всё. В этом суть паттерна флюкс. Дальше уже детали. Представление вызывает действие, чтобы оно запустило событие, котрое отлавливается хранилищем, которое после выполнения неких функций запускает событие "изменение", которое, в свою очередь, отлавливается представлением.
Переменная DataManager, которая используется в данном примере, по сути представляет собой то же действие, которое эмитирует событие в диспетчер при получении текста с сервера. Что также отлавливается хранилищем, а затем представлением.
