import React from "react";
import { useState } from "react";
import {Routes,Route,Redirect,NavLink} from "react-router-dom";
import Summery from "./Summery";
import "./index.css";

function Card(props ) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [classname1, setclassname1] = useState("card");
  const [classname2, setclassname2] = useState("dissum");
  const [summ, SetSumm] = useState("");
  const handleClick = (object) => {
    setSelectedObject(object);
    setclassname2("dissumclick");
    setclassname1("cardclick");
    SetSumm(object.show.summary);
    console.log(object.show.summary)
  
   
  };

 

  // console.log(props.getasumdata("bgjk"))
    return (
      <>
        
       <div className={classname1}>
            <img
              src={props.imgsrc}
              alt="myPic"
              className="card_img"
            />
            <div className="card_info">
              <span className="card_category">{props.title} </span>
              <h3 className="card_title">{props.sname}</h3>
              {/* <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a> */}
              <NavLink
  to="/summery">
               <button  onClick={() => handleClick(props.object)}>Watch Now</button>
               </NavLink>
            </div>
          </div>
       
       {/* {console.log(selectedObject.)} */}
          
     

           <div className={classname2}>
          {selectedObject && (
       
          {/* <Summery
            sum={selectedObject.show.summary}
            imgsum={selectedObject.show.image==null ?"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg":selectedObject.show.image.original}
          /> */}
          
      )}
      </div>
      </>
    );
  }
  export default Card;