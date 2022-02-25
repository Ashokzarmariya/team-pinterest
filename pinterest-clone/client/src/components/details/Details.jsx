
import { useState } from "react"
import { Comments } from "./Comments"
import "./Details.css"

export const Details=()=>{

    const [show,setShow]=useState(false)

    return (
        <div>
            <div>
            <div className="product_details">
                 <div className="product_img">
                     <div>
                         <img src="https://i.pinimg.com/564x/0a/da/e5/0adae5edc3bfa96fb82b01bb42d1d56b.jpg" alt="" />
                     </div>
                 </div>
                 <div className="details">
                       <div className="icon_profile_save">
                           <div className="icon">
                               
                           <span class="iconify" data-icon="bi:three-dots"  data-width="30" data-height="30"></span>
                           <span class="iconify" data-icon="bi:upload"  data-width="28" data-height="28"></span>
                           <span class="iconify" data-icon="akar-icons:link-chain" data-width="28" data-height="28"></span>
                           </div>
                           <div className="profile_save">
                             <button className="profile_button">Profile</button>
                              <button className="save">Save</button>
                           </div>
                       </div>
                       <div className="title">
                       Threadability - Men's Casual Fashion - Content Creator Educator

                       </div>
                       <div className="description">Date night ready! #mensfashion #menswear #outfitoftheday #outfitideas #outfitgrid #outfitideas #mensstyle #guyswithstyle</div>
                       <div className="profile">
                           <div></div>
                           <div>
                               {/* <button className="follow_button">Follow</button> */}
                           </div>
                       </div>
                       <div className="comments">
                           <div className="comment">
                               <div>
                                   Comments
                               </div>
                               <div onClick={()=>{
                                   setShow(!show)
                               }} className="comments_icon">
                                   <img src="/images/profile/right-arrow.png" alt="right-arrow" />
                               </div>
                           </div>
                           {show?<Comments/>:null}
                           {/* <Comments/> */}
                       </div>
                 </div>
            </div>
            <div className="more_like_this">
                    More like this
            </div>

            </div>
        </div>
    )
}