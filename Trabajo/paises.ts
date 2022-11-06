(()=>{
  interface cod {
    codpais : string,
 
  }
  const cod : cod ={
    codpais : "pe",
 
  }

  const searchByCodeCountry = async (cod:string) => {
    
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${cod}`
      )
        
      const data = await res.json();    
        const respuesta = {
          nombre : data[0].name.common,
          monedanom : data[0].currencies[Object.keys(data[0].currencies)].name,     
          monedasimbolo :   data[0].currencies[Object.keys(data[0].currencies)].symbol,                      
          idioma: ""
        };
        Object.entries(data[0].languages).find(([key, value]) => {
            respuesta.idioma = respuesta.idioma + value + " ";
          return false;
        });
        return console.log(`El pais ingrasado es : ${respuesta.nombre} , su moneda es : ${respuesta.monedanom} y su simbolo es : ${respuesta.monedasimbolo}, los idioma(s) : ${respuesta.idioma}`);  
       
      
    } catch (error) {
      console.log(error);
    }
  };
  searchByCodeCountry (cod.codpais)
    
})();