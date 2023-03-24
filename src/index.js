import { loadPage } from "./template";
import { createPage as menuPage} from "./menu";
import { createPage as contactPage } from "./contact";

function createMenu()
{
    let mainDiv = document.querySelector("#main");

    let menu = document.createElement('div');
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

    menu.appendChild(homeButton);
    menu.appendChild(menuButton);
    menu.appendChild(contactButton);

    mainDiv.appendChild(menu);

    let contentDiv = document.createElement("div");
    contentDiv.id = "content";

    mainDiv.appendChild(contentDiv);

}

createMenu();
loadPage();