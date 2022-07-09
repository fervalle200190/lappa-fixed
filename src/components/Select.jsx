import { useState } from "react";
import { ReactComponent as Arrow } from "../assets/flecha.svg";
import "../styles/Select.scss";

export const Select = () => {
     const [show, setShow] = useState("")
     const handleClick = ()=> {
          if(show === "show-select") {
               setShow("")
          } else {
               setShow("show-select")
          }
     }
     return (
          <div className="select-container">
               <div className={`upper-input`} onClick={handleClick}>
                    <Arrow />
               </div>
               <div className={`options-container ${show}`}>
                    <div>opción1</div>
                    <div>opción2</div>
                    <div>opción3</div>
                    <div>opción4</div>
                    <div>opción5</div>
               </div>
          </div>
     );
};
