const CountriesContainer = document.querySelector('.Countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-bar input')
const darkMood = document.querySelector('.dark-mood')
const body = document.querySelector('body')

let allCountriesData
// fetch country data and set in elements
fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        renderCountries(data)
        allCountriesData = data
    })

// filer by region functionality
filterByRegion.addEventListener('change', (e) => {
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
        .then((res) => res.json())
        .then((renderCountries))
})



// function for reuse of code
function renderCountries(data) {
    CountriesContainer.innerHTML = ''
    data.forEach((country) => {
        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href = `country.html?name=${country.name.common}`

        const cardHTML = `
        <img class="card-img" src="${country.flags.svg}" alt="flag">
        <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population:</b> ${country.population}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital?.[0]}</p>
        </div>
        `
        countryCard.innerHTML = cardHTML
        CountriesContainer.append(countryCard)
    })
}



// search by country name functionality
searchInput.addEventListener('input', (e) => {
    const filterCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(filterCountries)
})


// lite dark mood

const DARK = JSON.parse(localStorage.getItem('darkMode'))

if(DARK){
    body.classList.add('dark')
    darkMood.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Lite Mode`
}else{
    body.classList.remove('dark')
    darkMood.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`
}


darkMood.addEventListener('click', () => {
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        darkMood.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Lite Mode`
        localStorage.setItem('darkMode',true)


    } else {
        darkMood.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`
        localStorage.setItem('darkMode',false)
    }
})
