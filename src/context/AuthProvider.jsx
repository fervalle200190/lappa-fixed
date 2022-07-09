import { useEffect, useState } from "react";
import { checkToken, getToken } from "../helper";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
     const [isOpen, setIsOpen] = useState("show-nav");
     const [isLogged, setIsLogged] = useState(false);
     const [error, setError] = useState(false)
     const handleClick = () => {
          if (isOpen === "") {
               setIsOpen("show-nav");
          } else {
               setIsOpen("");
          }
     };

     const firstToken = async (form) => {
          let response = await getToken(form);

          if(response.error) {
               setError(true)
               return
          }
          if (!response.result) {
               return;
          }
          localStorage.setItem("token", response.result.token);
          setIsLogged(true);
          setError(false)
     };

     const validateLogged = async (token) => {
          let newDataToken = {
               params: {
                    token,
               },
          };
          let response = await checkToken(newDataToken);
          if(response === 'error') {
               setIsLogged(false)
               return
          }
          if (!response.result) {
               return;
          }
          localStorage.setItem("token", response.result.token);
          setIsLogged(true);
     };

     const logOut = () => {
          localStorage.removeItem("token");
          setIsLogged(false);
     };

     useEffect(() => {
          if (localStorage.getItem("token") !== null) {
               validateLogged(localStorage.getItem("token"));
          }            
     }, []);

     const stuff = {
          handleClick,
          isOpen,
          isLogged,
          firstToken,
          logOut,
          error
     };

     return <AuthContext.Provider value={stuff}>{children}</AuthContext.Provider>;
};
