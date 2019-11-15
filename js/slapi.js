if (window.location.pathname == '/other') {

    document.querySelector("#tvar1, #tvar2, #tvar3, #etBus1, #etBus2, #etBus3, #leBus1, #leBus2, #leBus3");

    async function getData() {
        /*had to add https://cors-anywhere.herokuapp.com/ before the api url to make it work on various browsers.

        9811 Stora Essingen - 1280 Lilla Essingen*/
        const response1 = await fetch('https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=81b107d263bb421ab58b898ddf4e09ac&siteid=9811&timewindow=180');
        const response2 = await fetch('https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=81b107d263bb421ab58b898ddf4e09ac&siteid=1280&timewindow=180');
        const seData = await response1.text();
        const leData = await response2.text();
        const parseSeData = JSON.parse(seData);
        const parseLeData = JSON.parse(leData);

        // Essingen Tvärbana
        var tram1 = parseSeData.ResponseData.Trams[0].JourneyNumber;
        var tram2 = parseSeData.ResponseData.Trams[1].JourneyNumber;
        var tram3 = parseSeData.ResponseData.Trams[2].JourneyNumber;

        if (tram3 && tram2 && tram1) {
            tramOne();
            tramTwo();
            tramThree();
        } else if (!tram3 && tram2 && tram1) {
            tramOne();
            tramTwo();
        } else if (!tram3 && !tram2 && tram1) {
            tramOne();
        } else {
            console.log('There are no trams to be found!')
        }

        // Stora Essingen Buss
        var seBus1 = parseSeData.ResponseData.Buses[0].JourneyNumber;
        var seBus2 = parseSeData.ResponseData.Buses[1].JourneyNumber;
        var seBus3 = parseSeData.ResponseData.Buses[2].JourneyNumber;

        if (seBus3 && seBus2 && seBus1) {
            seBusOne();
            seBusTwo();
            seBusThree();
        } else if (!seBus3 && seBus2 && seBus1) {
            seBusOne();
            seBusTwo();
        } else if (!seBus3 && !seBus2 && seBus1) {
            seBusOne();
        } else {
            console.log('There are no buses to be found!')
        }

        // Lilla Essingen Buss
        var liBus1 = parseLeData.ResponseData.Buses[0].JourneyNumber;
        var liBus2 = parseLeData.ResponseData.Buses[1].JourneyNumber;
        var liBus3 = parseLeData.ResponseData.Buses[2].JourneyNumber;

        if (liBus3 && liBus2 && liBus1) {
            leBusOne();
            leBusTwo();
            leBusThree();
        } else if (!liBus3 && liBus2 && liBus1) {
            leBusOne();
            leBusTwo();
        } else if (!liBus3 && !liBus2 && liBus1) {
            leBusOne();
        } else {
            console.log('There are no buses to be found!');
        }

        function tramOne() {
            var tramOneNum = parseSeData.ResponseData.Trams[0].LineNumber;
            var tramOneDes = parseSeData.ResponseData.Trams[0].Destination;
            var tramOneTime = parseSeData.ResponseData.Trams[0].DisplayTime;

            tvar1.innerHTML = '<div class="row">' +
                '<div class="col-2">' + tramOneNum + '</div>' +
                '<div class="col-7">' + tramOneDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + tramOneTime + '</div>' +
                '</div></div>';
        }

        function tramTwo() {
            var tramTwoNum = parseSeData.ResponseData.Trams[1].LineNumber;
            var tramTwoDes = parseSeData.ResponseData.Trams[1].Destination;
            var tramTwoTime = parseSeData.ResponseData.Trams[1].DisplayTime;

            tvar2.innerHTML = '<div class="row">' +
                '<div class="col-2">' + tramTwoNum + '</div>' +
                '<div class="col-7">' + tramTwoDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + tramTwoTime + '</div>' +
                '</div></div>';
        }

        function tramThree() {
            var tramThreeNum = parseSeData.ResponseData.Trams[2].LineNumber;
            var tramThreeDes = parseSeData.ResponseData.Trams[2].Destination;
            var tramThreeTime = parseSeData.ResponseData.Trams[2].DisplayTime;

            tvar3.innerHTML = '<div class="row">' +
                '<div class="col-2">' + tramThreeNum + '</div>' +
                '<div class="col-7">' + tramThreeDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + tramThreeTime + '</div>' +
                '</div></div>';
        }

        function seBusOne() {
            var etBusOneNum = parseSeData.ResponseData.Buses[0].LineNumber;
            var etBusOneDes = parseSeData.ResponseData.Buses[0].Destination;
            var etBusOneTime = parseSeData.ResponseData.Buses[0].DisplayTime;

            etBus1.innerHTML = '<div class="row">' +
                '<div class="col-2">' + etBusOneNum + '</div>' +
                '<div class="col-7">' + etBusOneDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + etBusOneTime + '</div>' +
                '</div></div>';
        }

        function seBusTwo() {
            var etBusTwoNum = parseSeData.ResponseData.Buses[1].LineNumber;
            var etBusTwoDes = parseSeData.ResponseData.Buses[1].Destination;
            var etBusTwoTime = parseSeData.ResponseData.Buses[1].DisplayTime;

            etBus2.innerHTML = '<div class="row">' +
                '<div class="col-2">' + etBusTwoNum + '</div>' +
                '<div class="col-7">' + etBusTwoDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + etBusTwoTime + '</div>' +
                '</div></div>';
        }

        function seBusThree() {
            var etBusThreeNum = parseSeData.ResponseData.Buses[2].LineNumber;
            var etBusThreeDes = parseSeData.ResponseData.Buses[2].Destination;
            var etBusThreeTime = parseSeData.ResponseData.Buses[2].DisplayTime;

            etBus3.innerHTML = '<div class="row">' +
                '<div class="col-2">' + etBusThreeNum + '</div>' +
                '<div class="col-7">' + etBusThreeDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + etBusThreeTime + '</div>' +
                '</div></div>';
        }

        function leBusOne() {
            var leBusOneNum = parseLeData.ResponseData.Buses[0].LineNumber;
            var leBusOneDes = parseLeData.ResponseData.Buses[0].Destination;
            var leBusOneTime = parseLeData.ResponseData.Buses[0].DisplayTime;

            leBus1.innerHTML = '<div class="row">' +
                '<div class="col-2">' + leBusOneNum + '</div>' +
                '<div class="col-7">' + leBusOneDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + leBusOneTime + '</div>' +
                '</div></div>';
        }

        function leBusTwo() {
            var leBusTwoNum = parseLeData.ResponseData.Buses[1].LineNumber;
            var leBusTwoDes = parseLeData.ResponseData.Buses[1].Destination;
            var leBusTwoTime = parseLeData.ResponseData.Buses[1].DisplayTime;

            leBus2.innerHTML = '<div class="row">' +
                '<div class="col-2">' + leBusTwoNum + '</div>' +
                '<div class="col-7">' + leBusTwoDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + leBusTwoTime + '</div>' +
                '</div></div>';
        }

        function leBusThree() {
            var leBusThreeNum = parseLeData.ResponseData.Buses[2].LineNumber;
            var leBusThreeDes = parseLeData.ResponseData.Buses[2].Destination;
            var leBusThreeTime = parseLeData.ResponseData.Buses[2].DisplayTime;

            leBus3.innerHTML = '<div class="row">' +
                '<div class="col-2">' + leBusThreeNum + '</div>' +
                '<div class="col-7">' + leBusThreeDes + '</div>' +
                '<div class="col-3"> <div style="text-align: right;">' + leBusThreeTime + '</div>' +
                '</div></div>';
        }
    }

    getData();

}