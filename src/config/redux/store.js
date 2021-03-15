import { applyMiddleware, createStore } from "redux";
import reducer from './reducer/reducer'
import thunk from "redux-thunk";


// state = value state global
const store = createStore(reducer, applyMiddleware(thunk));

export default store;