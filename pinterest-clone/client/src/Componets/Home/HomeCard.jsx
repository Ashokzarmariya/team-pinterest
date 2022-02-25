import React, { useState } from "react";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdCallMade } from "react-icons/md";
//import "./Homecss.css"



const HomeCard = ({imgUrl}) => {
  const [enter, setEnter] = useState(false);

  return (
    <div className=" w-48 mx-1 mb-7 z-10 ">
      <div
        className="relative fullScaleContent"
        onMouseEnter={() => {
          setEnter(true);
        }}
        onMouseLeave={() => {
          setEnter(false);
        }}
        
      >
        <img
          className="rounded-2xl "
          src={imgUrl}
          alt="bike"
        />
        
        <div className={enter ? "block" : "hidden"}>
          <button className="btn btn-danger top-3 right-2 rounded-full absolute">
            Save
          </button>
          <button  className="rounded-full flex px-2 py-1 bg-white opacity-80 bottom-2 left-3 absolute">
           <MdCallMade className="text-sm mt-1 mr-1"/> <h1>bike</h1>
          </button>
          <button className="rounded-full bg-white text-2xl  opacity-80 bottom-3 right-11 absolute">
            
            <MdOutlineFileUpload/>
          </button>
          <button className="text-3xl text-white rounded-full  opacity-80 bottom-2 right-3 absolute">
          <IoEllipsisHorizontalCircleSharp/> 

          </button>
          
                  
        </div>
        
        
      </div>
    
    </div>
  );
};

export default HomeCard;
