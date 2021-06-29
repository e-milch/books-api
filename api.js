export const getBooks = async (search) => {
    const responsePromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`);
    const response = await responsePromise;
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse.items;
};
