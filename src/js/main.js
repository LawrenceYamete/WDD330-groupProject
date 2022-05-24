import ExternalServices from "./externalServices.js";

import { flyInHeaderFooter } from "./flyInNutsAndBolts.js";
//put in the header & footer
flyInHeaderFooter();


const externalServices = new ExternalServices()


function getBookById() {
    let book = externalServices.findBookById("Prj1iTmPJn4C");
    console.log(book)
}


function searchBar() {
    const search = document.querySelector("#searchBar");
    // console.log(search)

    search.addEventListener("search", () => {
        let results = externalServices.getSearchResults(search.value)
        console.log(results)
    })
}

searchBar();
getBookById();