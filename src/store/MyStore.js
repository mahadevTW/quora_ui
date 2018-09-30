import Reflux from 'reflux'
import AppActions from '../actions/AppActions'

const store = Reflux.createStore({
    listenables: [AppActions],
    onDeleteToDo() {
        console.log("MyAction ... Delete toDo...");
        this.trigger({
            "actions": "deleteToDo",
            "data": "something"
        })
    },
})