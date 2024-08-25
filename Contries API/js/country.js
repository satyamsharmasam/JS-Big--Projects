const countryName = new URLSearchParams(location.search).get('name')
const flagImg = document.querySelector('.flag-img')
const countryNameH1 = document.querySelector('.card-title')
const nativeName = document.querySelector('.native-name')
const Population = document.querySelector('.Population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const domain = document.querySelector('.domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries=document.querySelector('.border-countries')
const darkMood = document.querySelector('.dark-mood')
const body = document.querySelector('body')


// fetch country data and set in elements

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([country]) => {
        flagImg.src = country.flags.svg,
            countryNameH1.innerText = country.name.common

        if (country.name.nativeName) {
            nativeName.innerText = Object.values(country.name.nativeName)[0].common
        } else {
            nativeName.innerText = country.name.common
        }

        Population.innerText = country.population
        region.innerText = country.region

        if (country.subregion) {
            subRegion.innerText = country.subregion
        }

        if (country.capital) {

            capital.innerText = country.capital?.[0]
        }

        domain.innerText = country.tld.join(', ')

        currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(', ')

        languages.innerText = Object.values(country.languages).join(', ')

        if(country.borders){
            country.borders.forEach((border)=>{
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res)=>res.json())
                .then(([borderCountry])=>{
                    console.log(borderCountry.name.common)

                    const borderCountryTag=document.createElement('a')
                    borderCountryTag.innerText=borderCountry.name.common
                    borderCountryTag.href=`country.html?name=${borderCountry.name.common}`

                    borderCountries.append(borderCountryTag)
                })
            })
        }

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
