import { Select } from "../components/Select";
import { ReactComponent as Arrow } from "../assets/arrow-down-outline.svg";
import "../styles/GeneralData.scss";
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'


export const GeneralData = () => {
     return (
          <div className="general-data-container">
               <h1 className="data-title">Datos Generales</h1>

               <form className="form-container-general">
                    <label>
                         Nombre comercial
                         <input type="text" name="nombre-comercial" id="comercial" />
                    </label>
                    <label>
                         Teléfono
                         <input type="text" name="telefono" id="phone" />
                    </label>
                    <label>
                         Página web
                         <input type="text" name="website" id="website" />
                    </label>
                    <label>
                         Correo electrónico
                         <input type="email" name="email" id="email" />
                    </label>
                    <label>
                         Tipo de empresa
                         <Select />
                    </label>
                    <label>
                         Tipo de transporte
                         <Select />
                    </label>
                    <label>
                         Elementos que no transporta
                         <Select />
                    </label>
                    <div className="upload-container">
                         <label>
                              Insignia de la empresa
                              <div className="upload-btn">
                                   Subir logo
                                   <Arrow />
                              </div>
                              <input type="file" style={{ display: "none" }} />
                         </label>
                         <span className="upload-legend">
                              Subir en fondo blanco y en tamaño máximo de 100px x 100px
                         </span>
                    </div>
                    <div className="save-btn-container">
                         <input type="submit" value="guardar" className="save-btn" />
                    </div>
               </form>
               <BackIcon className="back-icon" />
          </div>
     );
};

