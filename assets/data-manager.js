import AppDispatcher from './app-dispatcher';
import Request from 'superagent';

var apiUrl = "/api/";

const DataManager = {
  get(number) {
    Request.get(apiUrl + number)
      .end(function(err, response) {
        AppDispatcher.dispatch({
          type:  "RECEIVE_TEXT",
          text: response.text
        });
      });
  }
}

export default DataManager;
