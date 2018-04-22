import Reflux from 'reflux'
import AppActions from '../actions/AppActions'
import request from 'superagent'

const AppStore = Reflux.createStore({
  listenables: [AppActions],

  onShowLoginPopup() {
    this.trigger({action: "showLoginPopup"})
  },

  onHideLoginPopup() {
    this.trigger({action: "hideLoginPopup"});
  },
  onLogin(username, password) {
    let requestBody = {
      username: username,
      password: password,
      clientId: 'Mozilla/4.0 MDN Example'
    };
    fetch('http://35.194.255.251/feedservice/login/', {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(requestBody),
      headers: {
        'content-type': 'application/json',
      },
      mode: 'no-cors'
    }).then((response) => {
      this.trigger({action: "hideLoginPopup"});
      console.log(response.json())
    })
    // request
    //   .post('http://35.194.255.251/feedservice/login/')
    //   .send(requestBody)
    //   .set('content-type', 'application/json')
    //   .set('mode', 'no-cors')
    //   .then(function (res) {
    //     console.log(res)
    //   });
  }
});

export default AppStore;