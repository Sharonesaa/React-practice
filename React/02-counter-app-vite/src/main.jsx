import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
import'./styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <CounterApp value = {20}/>
    </React.StrictMode>
);
