import { ReactComponent as ArrowDown } from "../assets/flecha.svg";

export const BillingItem = ({ month, index }) => {
     return (
          <div className={`billing-item ${index % 2 === 0 ? "clear" : ""}`}>
               <p className="billing-p">{month}</p>
               <button>
                    Factura
                    <ArrowDown />
               </button>
               <button>
                    Recibo
                    <ArrowDown />
               </button>
          </div>
     );
};
