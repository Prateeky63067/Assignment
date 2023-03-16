import React, { useState } from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";
const Carddata = (props) => {
  const [classname, setclassname] = useState("containor");
  const setclass=()=>{
    setclassname("containorclick");
    alert("fghjkl")
  }
 
  return (
<>


<h1 className="heading">List of top {Sdata.length} show </h1>
    <div className={classname}>
    
    {Sdata.map((val)=> {
      return (
        <Card

          imgsrc={val.show.image==null ?"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg":val.show.image.original}
        //   title={val.show.genres}
          sname={val.show.name}
          link={val.link}
          sum={val.show.summary}
          getasumdata={props.getdata}
          object={val}
        />
      );
    })};
    </div>
</>
  )
}

export default Carddata