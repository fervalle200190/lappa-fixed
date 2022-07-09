import { Select } from "../components/Select";
import { ReactComponent as Arrow } from "../assets/arrow-down-outline.svg";
import "../styles/FiscalData.scss";
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'


export const FiscalData = () => {
     return (
          <div className="general-data-container">
               <h1 className="data-title">Datos Fiscales</h1>

               <form className="form-container-fiscal">
                    <label>
                         Razon Social a facturar
                         <input type="text" name="nombre-comercial" id="comercial" />
                    </label>
                    <label>
                         Condición ante IVA
                         <input type="text" name="iva" id="iva" />
                    </label>
                    <label>
                         Cuit
                         <input type="text" name="cuit" id="cuit" />
                    </label>
                    <label>
                         Domicilio
                         <Select />
                    </label>
                    <label>
                         Provincia
                         <Select />
                    </label>
                    <div className="upload-container">
                         <label>
                              Adjuntar constancia de inscripción de AFIP
                              <div className="upload-btn">
                                   Subir
                                   <Arrow />
                              </div>
                              <input type="file" style={{ display: "none" }} />
                         </label>
                    </div>
                    <div className="save-btn-container">
                         <input type="submit" value="guardar" className="save-btn" />
                    </div>
               </form>
               <BackIcon className="back-icon" />
          </div>
     );
};

