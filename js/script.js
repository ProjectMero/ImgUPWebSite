document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.querySelector("header");
    fetch("../header.html")
        .then(res => res.text())
        .then(data => {
            header.innerHTML = data;
        });

    
    const footer = document.querySelector("footer");
    fetch("../footer.html")
        .then(res => res.text())
        .then(data => {
            footer.innerHTML = data;
        });
});