import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { AuthContext } from "../context/AuthContext";
import '../styles/Login.scss'

const initialForm = {
     mix: "",
     password: ''
}

export const Login = () => {
     const [loginForm, setLoginForm] = useState(initialForm)
     const { firstToken, error } = useContext(AuthContext)

     const handleForm = (e)=> {
          setLoginForm({
               ...loginForm,
               [e.target.name]: e.target.value
          })
     }

     const handleSubmit = (e)=> {
          e.preventDefault()
          let dataToSend = {
               params: {
                    user: loginForm.mix,
                    pass: loginForm.password
               }
          }
          firstToken(dataToSend)
     }
     return (
          <div className="inner-main">
               <div className="big-container">
                    <Logo />
                    <form className="login-form" onSubmit={handleSubmit}>
                         <label>
                              Correo Electrónico | Celular
                              <input type="text" name="mix" onChange={handleForm} value={loginForm.mix} />
                         </label>
                         <label>
                              Contraseña
                              <input type="password" name="password" onChange={handleForm} value={loginForm.password} />
                         </label>
                         {error && <p className="error-message">contraseña o usuario invalido</p>}
                         <input type="submit" value="Ingresar" />
                         <Link to="/recuperar">Olvidé mi usuario</Link>
                    </form>
               </div>
          </div>
     );
};
