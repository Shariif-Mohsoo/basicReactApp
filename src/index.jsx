//IMPORT THE REACT AND ReactDOM LIBRARIES
// import React from 'react';
import reactDOM from "react-dom/client";
//IMPORTING THE COMPONENT FROM APP.jsx
import MyApp from "./App";
//GET A REFERENCE TO THE DIV WITH ID ROOT
const ele = document.querySelector("#root");
//TELL REACT TO TAKE CONTROL OF THAT ELEMENT.
const root = reactDOM.createRoot(ele);
//CREATE A COMPONENT
//component is created in App.jsx

//SHOW THE COMPONENT ON THE SCREEN.
root.render(<MyApp />);
