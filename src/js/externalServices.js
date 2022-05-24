// example book request with googleBooks API

// https://www.googleapis.com/books/v1/volumes?q=search"<search>"

// e.g. 
// https://www.googleapis.com/books/v1/volumes?q=search"the+hungry+caterpillar"

const baseURL = "https://www.googleapis.com/books/v1/volumes"

function convertToJson(res) {
    const jsonResponse = res.json();
    if (res.ok) {
      return jsonResponse;
    } else {
      throw { name: "servicesError", message: jsonResponse };
    }
  }


export default class ExternalServices {
    constructor() {}

    async getSearchResults(searchValue) {
        console.log(baseURL + `?q=search%${searchValue}`);
        return await fetch(baseURL + `?q=search%${searchValue}`)
            .then(convertToJson)
            .then((data) => {
                let books = data.items;
                console.log(books)
                return books
            });
    }

    async findBookById(id) {
        return fetch(baseURL + `/${id}`)
            .then(convertToJson)
            .then(data => {
                console.log(data)
            });
    }
}