import "../styles/LappaPlus.scss";
import { ReactComponent as IconOne } from "../assets/1.svg";
import { ReactComponent as IconTwo } from "../assets/2.svg";
import { ReactComponent as IconThree } from "../assets/3.svg";
import { ReactComponent as IconFour } from "../assets/4.svg";
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'
import { PlusBox } from "../components/PlusBox";

const boxInfo = [
     {
          description: `informacion de cada localidadde carga del transporte`,
          icon: <IconOne />,
     },
     {
          description: `Posicionamiento en los primeros lugares de busqueda`,
          icon: <IconTwo />,
     },
     {
          description: `Información sobre los servicios que brinda la empresa`,
          icon: <IconThree />,
     },
     {
          description: `Soporte técnico vía chat, whatsapp, teléfono y correo electronico.`,
          icon: <IconFour />,
     },
];

export const LappaPlus = () => {
     return (
          <div className="lappa-plus-container">
               <h1 className="plus-title">Lappa plus</h1>
               <p className="plus-p">
                    Estamos para ofrecerte la mejor experiencia, desde el mismo instante en que te registrás, y siempre
                    atendido por personas reales, no robots.
               </p>
               <div className="cards-container">
                    {boxInfo.map(({ description, icon }) => (
                         <PlusBox key={description} description={description} icon={icon} />
                    ))}
               </div>
               <div className="plus-btn-container">
                    <button>Suscribirse</button>
               </div>
               <BackIcon className="back-icon" />
          </div>
     );
};
