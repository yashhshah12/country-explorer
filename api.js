const BASE_URL = "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital";
export async function getCountryData() {
    try {
            const resp = await fetch(BASE_URL);
            console.log(BASE_URL);
            
    if (!resp.ok) {
        throw new Error("There is something error in connection only");
        
    }
    const countrydata = resp.json();

    
    return countrydata; 
    } catch (error) {
        console.log(error);
        return [];
    }

 }
 