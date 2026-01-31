import {getCountryData} from './api.js';

const searchinput = document.getElementById("search-country");
const filtercountry = document.getElementById("filter");
const countryGrid = document.getElementById("country-grid");
const darkMode = document.getElementById("dark-mode");
let countryarr = [];
(async function () {
    console.log("App started londing");
    const countryData = await getCountryData();
    countryarr = countryData;
    displayCountry(countryarr)
    console.log(countryarr );
    

} )
();

function displayCountry(list) {
   const fragment  = document.createDocumentFragment();
countryGrid.innerHTML = ""
    if (list.length <= 0) {
    console.log("no data is there");
    countryGrid.innerHTML = `<div class="result">
                <h3>🚫 No countries found</h3>
                <p>Try changing your search term or region. </p>
            </div>`
    return [];    
   } 
   list.forEach(c => {
    const countryflag = c?.flags?.png;
   
    const countryname = c?.name?.common;
    const countryPopulation = c?.population;
    const countryregion = c?.region;
    const countrycapital = c?.capital;
    const countryCard = document.createElement("div");
    countryCard.classList.add("countryGrid");
    countryCard.innerHTML = `  <img src="${countryflag}" alt="">
                                      <div class="details">
                                            <h3>${countryname}</h3>
                                            <p><strong>Population ${countryPopulation}</strong></p>
                                            <p><strong>Region ${countryregion}</strong></p>
                                            <p><strong>Capital ${countrycapital}</strong></p>
                
                                            </div>`
                                    
                         fragment.appendChild(countryCard);       
    });
    countryGrid.appendChild(fragment)
    console.log(countryGrid);
}

function searchCard (){
let filtervalue = filtercountry.value;
let query = searchinput.value.toLowerCase();
console.log( "This is filter value ", filtervalue);

let result  = countryarr;
console.log(result);
if (filtervalue != "All") {
   result  = result.filter(c =>  c.region.toLowerCase() == filtervalue.toLowerCase()) 
}
if (query) {
    result = result.filter(c => c?.name?.common.toLowerCase().includes(query))
}


displayCountry(result)
console.log(result);

}
filtercountry.addEventListener("change", searchCard)
searchinput.addEventListener("input", searchCard)


darkMode.addEventListener("click",()=>{
document.body.classList.toggle("dark")
const isDark = document.body.contains("dark");
if (isDark) {
    darkMode.textContent = "☀️ Light Mode"
}else{
    darkMode.textContent= "🌙 Dark Mode";
}

})