import BlackForest from './images/black-forest.jpeg';
function loadPage()
{
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    let div = document.createElement("div");
    div.classList.add('home');

    let h1 = document.createElement("h1");
    h1.textContent = "Welcome to The French Bakery!";

    let img = new Image();
    img.src = BlackForest;

    let p = document.createElement("p");
    p.textContent = "The French Bakery is a cozy cafe for families to enjoy coffee and pastries.";

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);

    contentDiv.appendChild(div);
}

export {loadPage};