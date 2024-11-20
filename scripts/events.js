const showContent  = event => console.log(event.target.textContent) // without textContent it'd show the whole html for that element
document.querySelector(".porcupine").onclick = showContent;

const tagName = event => console.log(event.target.tagName)
document.querySelector(".panther").onclick = tagName;

const elementClick = event => console.log(event.target)
//window.onclick = event => console.log(event.target)

document.querySelector(".penguin").onclick = event => console.log(event.target.textContent.toUpperCase())

//window.onclick = event => console.log(event.target.textContent.toUpperCase())

//const sayHi = () => alert("HI")
//document.querySelector(".header").onclick = sayHi; 
//sayHi is a function but deleting the parenthesis will prevent js from reading it and executes right away when reading the file

//const sayHiName = (name) => alert("HI " + name)
//document.querySelector(".header__page-title").onclick = () => sayHiName("Jasmine") 
//If you need a function that takes an argument but you don't want it to fire right away you have to use an anonymous function

const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love pelicans")
    }
}

document.querySelector(".pelican").addEventListener("click", pelicanLove)

const birdLove = animal => console.log(`${animal}'s a pretty boy`)
document.querySelector(".parrot").addEventListener("click", (event) => birdLove(event.target.textContent))
document.querySelector(".peacock").addEventListener("click", (event) => birdLove(event.target.textContent))

const notAntEater = () => console.log("I am NOT an ant eater")
const notArmadillo = () => console.log("I am NOT an armadillo")

//document.querySelector(".pangolin").onclick = notAntEater
//document.querySelector(".pangolin").onclick = notArmadillo

//onclick in this case shows only the last value given. It's not very used. 

document.querySelector(".pangolin").addEventListener("click", notAntEater)
document.querySelector(".pangolin").addEventListener("click", notArmadillo, {once: true})

//addEventListener is more used cause it works better than onclick

let tabs = Array.from(document.querySelectorAll(".tab")); //without the array.from the list is a nodelist not an array. To be sure always transform the nodelist into an array

tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))

const bestAnimal = animal => {
    console.log(animal.toLowerCase() === "panther" ? `${animal} is the jungle assassin` : `${animal} is the best!`)
    /*
    if (animal.toLowerCase() === "panther") {
        console.log(`${animal} is the jungle assassin`)
    } else {
        console.log(`${animal} is the best!`)
    }
    */
}

let animamlTabs = Array.from(document.querySelectorAll(".tab")) //we're getting all the tabs thanks to queryselector all
animamlTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent))) //go through all the tabs, 1st arguments is that they have to be clicked, 2nd prints the animal

document.querySelector("footer").addEventListener("click", () => console.log("Footer"))
document.querySelector("footer p").addEventListener("click", () => console.log("Paragraph inside the footer"), true) //makes it happen first 
document.querySelector("footer p span").addEventListener("click", () => console.log("Span"))


//document.querySelector(".porcupine").classList.add("hello")
//document.querySelector(".porcupine").classList.remove("hello")

const setActive = (clickedTab) => {
    animamlTabs.forEach(tab => tab.classList.remove("active"))
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent
}

animamlTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

//document.querySelector(".pangolin").addEventListener("mouseenter", () => console.log("Hover!"))
//document.querySelector(".pangolin").addEventListener("mouseleave", () => console.log("Stop the hover!"))

let animalContent = Array.from(document.querySelectorAll(".content"))

const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured")
        } else {
            contentDiv.classList.remove("featured")
        }
    })
}

animamlTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
    findContent(tab.textContent.toLowerCase())
}))

animamlTabs.forEach(tab => tab.addEventListener("mouseleave", () =>
    animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))
))

let searchInput = document.querySelector("#search");

//document.querySelector("#search").addEventListener("input", () => console.log(searchInput.value)) //shows the value of the typed input. Input fireas as soon as the user starts typing
//document.querySelector("#search").addEventListener("change", () => console.log(searchInput.value)) //change event: it fires as soon as the mouse leaves the input field
const findTab = () => {
    animamlTabs.forEach( tab => {
        if (tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add("active")
        } else {
            tab.classList.remove("active")
        }
    })
}

document.querySelector("#search").addEventListener("change", findTab) 

// let Australia = { //this is an object. Objects always start with capital letter
//     name: "Australia",
//     capitalCity: "Canberra",
//     language: "English", 
//     population: 25000000,
//     sports: ["Cricket", "Aussie Rules", "Rugby"]
// }

//console.log(`There are ${Australia.population} people living in ${Australia.name}`)

//document.querySelector("h1").textContent = Australia.sports[0]

function Country(name, capitalCity, language, population, sports) { //this is a constructor. A constructor uses the old way to create functions and it always starts with a capital letter
    this.name = name,
    this.capitalCity = capitalCity,
    this.language = language,
    this.population = population,
    this.sports = sports,
    this.description = () => console.log(`The ${this.name}'s capital is ${this.capitalCity}`) //If you want to reference to the objects inside you need to use this

}

let sweden = new Country("Sweden", "Stockholm", "Swedish", 10000000, ["Hockey", "Brandboll"])
let pakistan = new Country("Pakistan", "Islamabad", "Urdu", 241000000, ["Cricket", "Hockey"])
let australia = new Country("Australia", "Canberra", "English", 25000000, ["Cricket", "Football", "Rugby"])

let countries = [sweden, pakistan, australia]

countries.forEach(country => country.description());



















