function loadPage()
{
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.textContent = "Welcome to The French Bakery!";

    let img = new Image();
    img.src = "../src/images/black-forest.jpeg";

    let p = document.createElement("p");
    p.textContent = "The French Bakery is a cozy cafe for families to enjoy coffee and pastries.";

    contentDiv.appendChild(h1);
    contentDiv.appendChild(img);
    contentDiv.appendChild(p);
}

export {loadPage};