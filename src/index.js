import { loadPage } from "./template";
import { createPage as menuPage} from "./menu";
import { createPage as contactPage } from "./contact";

import './styles.css';

function createMenu()
{
    let mainDiv = document.querySelector("#main");

    let menu = document.createElement('div');
    menu.classList.add("nav-bar");

    let title = document.createElement("p");
    title.textContent = "The French Bakery";

    let homeButton = document.createElement('button');
    let menuButton = document.createElement('button');
    let contactButton = document.createElement('button');

    homeButton.textContent = "Home";
    homeButton.addEventListener('click', () => {
        loadPage();
    })

    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', () => {
        menuPage();
    })

    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', () => {
        contactPage();
    })

    let right = document.createElement("div");
    right.classList.add('right')

    menu.appendChild(title);
    right.appendChild(homeButton);
    right.appendChild(menuButton);
    right.appendChild(contactButton);

    menu.appendChild(right);

    mainDiv.appendChild(menu);  

    let contentDiv = document.createElement("div");
    contentDiv.id = "content";

    mainDiv.appendChild(contentDiv);

}

createMenu();
loadPage();