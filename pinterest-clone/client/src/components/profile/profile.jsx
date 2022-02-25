import { useState } from "react"
import { Created } from "./created";
import { Modal } from "./Modal";
import "./profile.css"
import { Saved } from "./saved";


export const Profile=()=>{

    const [plus,setPlus]=useState(false);

    const [created,setCreated]=useState(true);

    const [saved,setSaved]=useState(false);

    return (
        <div>
            <div>

         
           <div className="profile-img">
               <div>
                   <img src="https://i.pinimg.com/280x280_RS/2b/78/30/2b783010a797035f16de38ce9823e13f.jpg" alt="" />
               </div>
           </div> 
           <div className="profile-name">
                <h2>Aswin Anandh</h2>
                <h4>@aswinanand66</h4>
                <h5>0 following</h5>
           </div>
           <div className="share-editProfile">
               <button>Share</button>
               <button>Edit profile</button>
           </div>
           <div className="created-saved">
              <button onClick={()=>{
                  setCreated(true);
                  setSaved(false);
              }}>Created</button>
              <button
              onClick={()=>{
                  setSaved(true);
                  setCreated(false);
              }}>Saved</button>
           </div>
           </div>
           <hr />
           {/* <div onClick={()=>{
               setPlus(true);
           }} className="add_pin">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png" alt="add pin" />
           </div> */}
          
          <div>

              {created?<Created/>:null}
              {saved?<Saved/>:null}
            
          </div>
           <div onClick={event => event.target.className=="add_pin_modal"?setPlus(false):null} className="show_modal">
              {plus?<Modal/>:null}
           </div>
           
        </div>
    )
}