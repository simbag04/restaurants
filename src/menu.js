import Strawberry from './images/fresh-strawberry.jpeg';
import Chocolate from './images/dark-chocolate.jpeg';
import Tiramisu from './images/tiramisu-cake.jpg';

function addItem(src, name, description)
{
    let menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");

    let img = new Image();
    img.src = src;

    let itemName = document.createElement('h2');
    itemName.textContent = name;

    let descrip = document.createElement('p');
    descrip.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(img);
    menuItem.appendChild(descrip);

    return menuItem;
}

function createPage() 
{
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.textContent = "Menu";

    let items = document.createElement('div');
    items.classList.add('menus');

    items.appendChild(addItem
        (Strawberry, 
        'Fresh Strawberry Cake', 
        "MOIST VANILLA CAKE LAYERED WITH FRESH STRAWBERRIES, HOUSE MADE WHIPPED CREAM & DECORATED WITH SLIVERED ALMONDS"));

    items.appendChild(addItem
        (Chocolate, 
        'Dark Chocolate Mousse', 
        "DENSE CHOCOLATE CAKE, DARK CHOCOLATE CREAM TOPPED WITH WHIPPED CREAM & CHOCOLATE PIECES."));

    items.appendChild(addItem
        (Tiramisu, 
        'Tiramisu', 
        "DARK CHOCOLATE CAKE, LAYERED WITH COFFEE CREAM. DECORATED WITH COCOA NIBS, WHIPPED CREAM AND CANDIED ESPRESSO BEANS."));

    contentDiv.appendChild(h1);
    contentDiv.appendChild(items);

}

export {createPage};