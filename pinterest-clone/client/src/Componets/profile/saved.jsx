
import "./Saved.css"

export const Saved=()=>{

   var saved_data= JSON.parse(localStorage.getItem("data1"));

   console.log("saved",saved_data);


    return(
        <div>
            <div className="saved_div">
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
            </div>
        </div>
    )
}