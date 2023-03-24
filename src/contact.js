function createLocation(location, address)
{
    let card = document.createElement('div');

    let title = document.createElement('h4');
    title.textContent = location;

    let p = document.createElement('p');
    p.textContent = address;

    let hoursDiv = document.createElement('div');
    let hours = document.createElement('h4');
    hours.textContent = "Hours";

    let monSat = document.createElement('p');
    monSat.textContent = "Mon - Sat: 7am - 7pm";

    let sun = document.createElement('p');
    sun.textContent = "Sunday: 7am - 6pm";

    hoursDiv.appendChild(hours);
    hoursDiv.appendChild(monSat);
    hoursDiv.appendChild(sun);

    card.appendChild(title);
    card.appendChild(p);
    card.appendChild(hoursDiv);
    
    return card;

}

function createPage()
{
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    let h1 = document.createElement('h1');
    h1.textContent = "Locations";

    let locations = document.createElement('div');

    locations.appendChild(createLocation(
        "Crossroads Bellevue", "15600 NE 8th St K-4 Bellevue, WA 98008 (425) 747-0557"
    ));
    locations.appendChild(createLocation(
        "Crossroads Bellevue", "15600 NE 8th St K-4 Bellevue, WA 98008 (425) 747-0557"
    ));
    locations.appendChild(createLocation(
        "Crossroads Bellevue", "15600 NE 8th St K-4 Bellevue, WA 98008 (425) 747-0557"
    ));

    contentDiv.appendChild(h1);
    contentDiv.appendChild(locations);


}

export {createPage};      