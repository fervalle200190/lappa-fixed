import { ReactComponent as NavIcon } from "../assets/nav.svg";

export const LocationsItem = ({ location }) => {
     return (
          <li className="location-flex">
               <NavIcon />
               {location}
          </li>
     );
};
