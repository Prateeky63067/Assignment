import React from 'react'
import "./summery.css";
const Summery = (props) => {

  console.log(props.sumdata("summery tak pahuch gaya"))
  return (
    <>
       <div className='outerSummery'>
       <h1 className="heading">Summery </h1>
         <div className='innersummery'>
         <img style={{width:"50%",height:"400px"}}
              src={props.imgsum}
              alt="myPic"
            />
         </div>
         <div className='summery'>
         {console.log(props.sum)}
         <p>{props.sum}</p>
         </div>
       </div>
    </>
  )
}

export default Summery