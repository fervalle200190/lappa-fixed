export const getToken = async (dataForm) => {
     try {
          let response = await fetch(`https://validacion.hgtsa.com.ar/app/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(dataForm),
          });
          let data = await response.json();
          return data;
     } catch (error) {
          return "error";
     }
};

export const checkToken = async (tokenData) => {
     try {
          let response = await fetch(`https://validacion.hgtsa.com.ar/app/check`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(tokenData),
          });
          let data = await response.json();
          return data;
     } catch (error) {
          return 'error'
     }
};

export const resetPassword = async (number) => {
     let response = await fetch(`https://validacion.hgtsa.com.ar/usuarios/resetearconntrasena`, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(number),
     });
     let data = await response.json();
     return data;
};
