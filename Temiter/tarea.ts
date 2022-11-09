import { EventEmitter } from 'events';  
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
            };  
            const eventEmitter = new EventEmitter();
            eventEmitter.on('primerEvento', () => {
              return console.log(`El pais ingrasado es : ${respuesta.nombre} `);
            });

        } catch (error) {
          console.log(error);
        }
      };
      searchByCodeCountry (cod.codpais)

})();