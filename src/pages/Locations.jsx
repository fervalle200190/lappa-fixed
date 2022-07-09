import { Link } from "react-router-dom";
import { LocationsItem } from "../components/LocationsItem";
import { MapView } from "../components/MapView";
import "../styles/Locations.scss";
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'

const address = [
     "9 de julio 875, Rosario, Santa Fe.",
     "25 de mayo 1010, San Nicolas, Buenos Aires.",
     "San Martin 1090, San Pedro, Buenos Aires.",
     "Belgrano 666, Zarate, Buenos Aires.",
];

export const Locations = () => {  
     return (
          <div className="location-container">
               <h1 className="location-title">Localidades</h1>
               <p className="location-p">Localidades cargadas</p>
               <ul>
                    {address.map((ad) => (
                         <LocationsItem key={ad} location={ad} />
                    ))}
               </ul>
               <div className="location-btn-container">
                    <Link to={`/localidades/ingresar`}>
                         <button>Ingresar localidad</button>
                    </Link>
               </div>
               <MapView />
               <BackIcon className="back-icon" />
          </div>
     );
};
