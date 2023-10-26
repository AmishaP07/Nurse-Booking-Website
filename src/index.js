import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const express=require("express");
// const app=express();
// const bodyParser=requie("body-parser");
// const cors=reqiure("cors");

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.listen(5000,()=>{
//   console.log("Server is running on port 5000");
// })