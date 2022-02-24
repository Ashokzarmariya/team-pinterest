
import { useState } from "react"
import "./pin.css"


export const Pin=()=>{

   const upload_img=(event,setPinImage)=>{
           if(event.target.files && event.target.files[0]){
               if(/image\/*/.test(event.target.files[0].type)){
                   const reader=new FileReader();
                    
                   reader.onload=function(){
                       setPinImage(reader.result);
                   }
                   reader.readAsDataURL(event.target.files[0])
               }
           }
   }

    const [pinImage,setPinImage]=useState();

    

    return (
        <div>
            <input onChange={event=> upload_img(event,setPinImage)} type="file" name="picture" id="picture" />
            <div className="card">
                <div className="pin_title"></div>
                <div className="pin_modal">
                    <div className="modal_head">
                        <div className="save_card">Save</div>
                    </div>
                    <div className="modal_foot">
                            <div className="destination">
                                <div className="pint_mock_icon_container">
                                    <img src="" alt="pint_mock_icon" className="pint_mock_icon" />
                                </div>
                                <span>Eaterly</span>
                            </div>
                            <div className="pint_mock_icon_container">
                                    <img src="" alt="pint_mock_icon" className="pint_mock_icon" />
                                </div>
                                <div className="pint_mock_icon_container">
                                    <img src="" alt="edit" className="pint_mock_icon" />
                                </div>
                    </div>
                </div>
                <div className="pin_image">
                    <img src={pinImage} alt="pin_image" />
                </div>
            </div>
        </div>
    )
}