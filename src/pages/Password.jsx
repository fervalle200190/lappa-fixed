import { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { resetPassword } from "../helper";
import "../styles/Password.scss";

export const Password = () => {
     const [resetForm, setResetForm] = useState("");
     const handleSubmit = ()=> {
          resetPassword({
               params: {
                    celular: resetForm
               }
          })
     }
     return (
          <div className="password-container">
               <Logo />
               <div className="inner-box">
                    <div className="lock-container">
                         <ion-icon name="lock-closed"></ion-icon>
                    </div>
                    <h1>¿No te acordas de la contraseña?</h1>
                    <p>Podes regenerar la contraseña con tu teléfono</p>
                    <form onSubmit={handleSubmit}>
                         <div className="input-container">
                              <div className="mail-icon-container">
                                   <ion-icon name="mail"></ion-icon>
                              </div>
                              <input
                                   type="text"
                                   name="mix"
                                   onChange={(e) => setResetForm(e.target.value)}
                                   value={resetForm}
                              />
                         </div>
                         <button>Regenerar contraseña</button>
                    </form>
               </div>
          </div>
     );
};
