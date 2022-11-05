(()=>{
    interface cod {
      codpais : string,
  
    }
    const cod : cod ={
      codpais : "col"
    }
  
    const searchByCodeCountry =  (cod:string) => {
      
      try {
        fetch(
          `https://restcountries.com/v3.1/alpha/${cod}`
        ) .then(res=>res.json())      
          .then((data)=>console.log(data)) 
          
/*         const data =  res.json();
         return data; */
        
      } catch (error) {
        console.log(error);
      }
    };
    searchByCodeCountry (cod.codpais)
      
  })();