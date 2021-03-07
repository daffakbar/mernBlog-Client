import { createStore } from "redux";

import reducer from './reducer/reducer'



// state = value state global


const store = createStore(reducer);

export default store;