import ExternalServices from "./externalServices.js";

import { flyInHeaderFooter } from "./flyInNutsAndBolts.js";
//put in the header & footer
flyInHeaderFooter();


const externalServices = new ExternalServices()

// Gets a book by id and returns it's promise
function getBookById() {
    let book = externalServices.findBookById("Prj1iTmPJn4C");
    console.log(book)
}

//  Gets a list of 10 books in an array 
function searchBar() {
    const search = document.querySelector("#searchBar");
    search.addEventListener("search", () => {
        let results = externalServices.getSearchResults(search.value)
        console.log(results)
    })
}

searchBar();
getBookById();