import { getBooks } from "./api.js";
import createImage from "./result-card.js";

const form = document.getElementById("apiForm");

            // running a search
form.addEventListener("submit", async (event) => {
    event.preventDefault();

        // clearing any previous search
    document.getElementById("data").innerHTML = "";
    document.getElementById("results").innerHTML = "";

        // getting the search query
    const search = document.getElementById("searchTerm").value;
    const books = await getBooks(search);
    console.log(books);

        // getting the data div
    const dataOutput = document.getElementById("data");

        // creating the results header and appending to results div
    const resultsDiv = document.getElementById("results");
    const resultsHeader = document.createElement("H3");
    resultsHeader.innerHTML = "I've collected these results:"
    resultsDiv.appendChild(resultsHeader);

        // loop results to render thumbnails in data section
    for (let i = 0; i < books.length; ++i) {
        createImage(
            "figure",
            `${books[i].volumeInfo.imageLinks?.thumbnail}`,
            `${books[i].volumeInfo.title} by ${books[i].volumeInfo.authors}`,
            books[i].volumeInfo.description,
            dataOutput
        );
    
    };

        // clear the search input box
    document.getElementById("searchTerm").value = "";

});

    // placeholder image url
    // `https://via.placeholder.com/128x205.jpg?text=no+image+found`