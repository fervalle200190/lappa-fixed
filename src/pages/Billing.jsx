import { BillingItem } from "../components/BillingItem";
import '../styles/Billing.scss'
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'


const months = ["Enero 2022", "Febrero 2022", "Marzo 2022", "Abril 2022", "Mayo 2022", "Junio 2022", "Julio 2022"];

export const Billing = () => {
     return (
          <div className="billing-container">
               <h1 className="billing-title">Facturación</h1>
               <div className="billings-container">
                    {months.map((month, index) => (
                         <BillingItem key={month} month={month} index={index + 1} />
                    ))}
               </div>
               <BackIcon className="back-icon" />
          </div>
     );
};
