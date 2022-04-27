import React from 'react';
import './index.css';
// import App from './App';
import {createRoot} from 'react-dom/client';
// import Login from './Components/Login';
import Datas from './Components/Datas';


const rootElment = document.getElementById('root') ;
const root = createRoot(rootElment)

root.render(
  <React.StrictMode>

    {/* <Login /> */}
    <Datas/>
  </React.StrictMode>,
  
);

