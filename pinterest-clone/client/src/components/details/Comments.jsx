import { useEffect } from "react"
import { useState } from "react"

import "./Comments.css"

export const Comments =()=>{

   const [comment,setComment]=useState(["djdj"])
   var data=["a","aan"]
   const addComment=()=>{
    
   var c= document.getElementById("inputC").value
   setComment(c);

   data.push(comment);
   console.log(c)
   data.push(c);
    console.log(data)
    localStorage.setItem("comment",JSON.stringify(data))

   }

    return (
        <div>
            <div>
                Share feedback, ask question or give a high five
            </div>
            <div className="comment_box">
                <div className="comment_img">
                  <img src="/images/profile/profile-img.jpg" alt="profile-img" />
                </div>
                 <div className="comment_input">
                 <input id="inputC"  type="text" placeholder="Add a comment" />
                 </div>
                
                 
            </div>
        </div>
    )
}