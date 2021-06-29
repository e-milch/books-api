
        // render search results
const createImage = (type, src, text, desc, parent) => {
        // creating figure element with image, caption and description
    const figure = document.createElement(type);
    figure.className = "result-card";
    const renderImage = document.createElement("img");
    renderImage.src = src;
    const caption = document.createElement("figcaption")
    caption.innerHTML = text;
    const description = document.createElement("P");

    // mouse onto figure card to render description
    figure.addEventListener("mouseover", (event) => {
        event.preventDefault();
        description.innerText = desc;
        figure.appendChild(description);
    });

    // mouse exit card to close description
    figure.addEventListener("mouseleave", (event) => {
        description.remove();
    });

    // adding children to figure card
    figure.appendChild(renderImage);
    figure.appendChild(caption);

    // adding figure card to page
    parent.appendChild(figure);

};

export default createImage;