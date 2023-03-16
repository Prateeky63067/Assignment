


import React, { useState } from "react";
import ReactDom from "react-dom";
// import App from "./App";
// import App1 from "./App1"
// import Carddata from "./Carddata"
import { BrowserRouter } from "react-router-dom";
import Test from "./Test";
ReactDom.render(
  <>
   <BrowserRouter>
  {/* <App/> */}
  {/* <App1/> */}
  {/* <Carddata/> */}
  <Test/>
   </BrowserRouter>
  </>,
  document.getElementById("root")
);



