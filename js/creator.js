if (window.location.pathname == '/restaurants') {
    const output = document.querySelector("#output");

    const restaurantArray = [essingeWok, sePizzeria, cafePo, essingeGrill, hstWok, ilCarpaccio, nowSushi];

    function renderRestaurants() {

        for (i = 0; i < restaurantArray.length; i++) {

            if (restaurantArray[i].website) {
                output.innerHTML += '<div class="col-md-4 pb-3 bg-light"><div class="card card-cascade narrower"><div class="view view-cascade overlay"><button type="button" class="btn" data-toggle="modal" data-target="' + restaurantArray[i].food + '"><img class="card-img-top"src="' + restaurantArray[i].image + '"alt="Card image cap"></button></div><div class="card-body card-body-cascade text-center tour st-3" data-index="2"><a class="map-link" href="' + restaurantArray[i].website + '" target="_blank"><h4 class="m-0 text-grey">' + restaurantArray[i].name + '</h4></a><a class="map-link" href="' + restaurantArray[i].map + '" target="_blank"><h6 class="blue-text pb-2 text-gray">' + restaurantArray[i].street + '</h6></a><p class="card-text">' + restaurantArray[i].description + '</p></div><div class="row text-center"><div class="col-6 pb-3"><button type="button" class="btn" data-toggle="modal" data-target="' + restaurantArray[i].menu + '"><img src="menulogo.png" alt="menulogo" style="max-width: 60px;"></button></div><div class="col-6 pb-3"><button type="button" class="btn" data-toggle="modal" data-target="' + restaurantArray[i].time + '"><img src="timelogo.png" alt="menulogo" style="max-width: 60px;"></button></div></div></div></div>'
            } else {
                output.innerHTML += '<div class="col-md-4 pb-3 bg-light"><div class="card card-cascade narrower"><div class="view view-cascade overlay"><button type="button" class="btn" data-toggle="modal" data-target="' + restaurantArray[i].food + '"><img class="card-img-top"src="' + restaurantArray[i].image + '"alt="Card image cap"></button></div><div class="card-body card-body-cascade text-center tour st-3" data-index="2"><h4 class="m-0 text-grey">' + restaurantArray[i].name + '</h4></a><a class="map-link" href="' + restaurantArray[i].map + '" target="_blank"><h6 class="blue-text pb-2 text-gray">' + restaurantArray[i].street + '</h6></a><p class="card-text">' + restaurantArray[i].description + '</p></div><div class="row text-center"><div class="col-6 pb-3"><button type="button" class="btn" data-toggle="modal" data-target="' + restaurantArray[i].menu + '"><img src="menulogo.png" alt="menulogo" style="max-width: 60px;"></button></div><div class="col-6 pb-3"><button type="button" class="btn" data-toggle="modal" data-target="' + restaurantArray[i].time + '"><img src="timelogo.png" alt="menulogo" style="max-width: 60px;"></button></div></div></div></div>'
            }
        }
    }

    renderRestaurants();

}

if (window.location.pathname == '/service') {
    const serviceOutput = document.querySelector("#serviceOutput");

    const serviceArray = [secretsByMaria, booksAndFlowers, coop, essingeHudvard, detaljerian, essingeKyrkan, essingeService, elitSportsclub];

    function renderServices() {

        for (i = 0; i < serviceArray.length; i++) {

            if (serviceArray[i].website) {
                serviceOutput.innerHTML += '<div class="col-md-3 pb-3"><div class="card card-cascade wider"><div class="view view-cascade overlay"><img class="card-img-top"src="' + serviceArray[i].image + '"alt="Card image cap"></div><div id="step-1" class="card-body card-body-cascade text-center tour st-3" data-index="2"><a class="map-link" href="' + serviceArray[i].website + '" target="_blank"><h4 class="m-0 text-grey">' + serviceArray[i].name + '</h4></a><a class="map-link" href="' + serviceArray[i].map + '" target="_blank"><h6 class="blue-text pb-2">' + serviceArray[i].street + '</h6></a><p class="card-text">' + serviceArray[i].description + '</p></div></div></div>'
            } else {
                serviceOutput.innerHTML += '<div class="col-md-3 pb-3"><div class="card card-cascade wider"><div class="view view-cascade overlay"><img class="card-img-top"src="' + serviceArray[i].image + '"alt="Card image cap"></div><div id="step-1" class="card-body card-body-cascade text-center tour st-3" data-index="2"><h4 class="m-0 text-grey">' + serviceArray[i].name + '</h4></a><a class="map-link" href="' + serviceArray[i].map + '" target="_blank"><h6 class="blue-text pb-2">' + serviceArray[i].street + '</h6></a><p class="card-text">' + serviceArray[i].description + '</p></div></div></div>'
            }
        }
    }

    renderServices();

}