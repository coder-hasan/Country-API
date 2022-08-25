// Module 25.5 & 26.5

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountry(data))
    .catch(error => console.log(error));

displayCountry = countries => {
    // console.log("countris", countries)
    const countryNames = countries.map(country => country)
    // console.log(countryName);
    const countrisDiv = document.getElementById("countries-container");
    // for(let i = 0; i < countryNames.length; i++){
    //     const country = countryNames[i];
    //     // console.log(country);
        
    //     const countryDiv = document.createElement("div");
    //     // const name = document.createElement("h3");
    //     // const countryCapital = document.createElement("p");
        
    //     // name.innerText = country.name.common;
    //     // countryCapital.innerText = country.capital;
        
    //     // countrisDiv.appendChild(countryDiv);
    //     // countryDiv.appendChild(name);
    //     // countryDiv.appendChild(countryCapital);

    //     const countryInfo = `
    //         <h3>${country.name.common}</h3>
    //         <p>${country.capital}</p>
    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     countrisDiv.appendChild(countryDiv);
    // }
    countryNames.forEach(country => {
        const countryDiv = document.createElement("div");
        const countryInfo = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
        `;
        countryDiv.innerHTML = countryInfo;
        countrisDiv.appendChild(countryDiv);
    });
}