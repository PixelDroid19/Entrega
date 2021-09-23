import React from "react";
import AgregarCitas from '../components/AgregarCita'
import ListarCita from '../components/ListarCita'
import {Provider} from 'react-redux'


import Store from '../store/Store.js'
const AgendaApp = () => {
  return (
    <Provider store={Store}>
       <div className="card mt-5">
      <div className="container text-center">
        <header>
          <h1>EPS Sura</h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-6"><AgregarCitas/></div>
          <div className="col-md-6"><ListarCita/></div>
        </div>
      </div>
    </div>
    </Provider>   
  );
};

export default AgendaApp;
