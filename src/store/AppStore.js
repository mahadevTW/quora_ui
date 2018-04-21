import Reflux from 'reflux'
import AppActions from '../actions/AppActions'

const AppStore = Reflux.createStore({
  listenables: [AppActions],

  onShowLoginPopup() {
    this.trigger({action: "showLoginPopup"})
  },

  onHideLoginPopup() {
    this.trigger({action: "hideLoginPopup"});
  },
  onLogin(username, password) {
    alert("Username : " + username + " password: " + password);
  }
});

export default AppStore;