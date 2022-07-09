import '../styles/Security.scss'
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'


export const Security = () => {
     return (
          <div className='security-container'>
               <h1 className='security-title'>Seguridad</h1>
               <form className="form-container-security">
                    <label>
                         Correo electrónico actual
                         <input type="email" name="email" id="email" />
                    </label>
                    <label>
                         Correo electrónico nuevo
                         <input type="email" name="email" id="email" />
                    </label>
                    <label>
                         Repetir correo electrónico nuevo
                         <input type="email" name="email" id="email" />
                    </label>
                    <div className="btn-security">
                         <button>Guardar cambios</button>
                    </div>
               </form>
               <form className="form-container-security snd-form">
                    <label>
                         Clave actual
                         <input type="password" name="password" id="password" />
                    </label>
                    <label>
                         Clave nueva
                         <input type="password" name="password2" id="password2" />
                    </label>
                    <label>
                         Repetir clave nueva
                         <input type="password" name="password3" id="password3" />
                    </label>
                    <div className="btn-security">
                         <button>Guardar cambios</button>
                    </div>
               </form>
               <BackIcon className='back-icon' />
          </div>
     );
};
