
(()=>{
  interface cod {
    codpais : string,

  }
  const cod : cod ={
    codpais : "pe"
  }

  const searchByCodeCountry = async (cod:string) => {
    
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${cod}`
      )/* .then(res=>res.json())      
        .then((data)=>console.log(data)) */
        
      const data = await res.json();
       return data;
      
    } catch (error) {
      console.log(error);
    }
  };
  searchByCodeCountry (cod.codpais)
    
})();