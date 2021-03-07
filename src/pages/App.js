import React from 'react'
import './App.css';
import {Routes, store} from '../config'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* provider component untuk membungkus seluruh aplikasi kita tujuan tambah props state global store */}
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
