// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

  document.innerHTML = `<h2> Mission Destination</h2>
<ol>
<li> Name: ${name}</li>
<li> Diameter: ${diameter}</li>
<li> Star: ${star}</li>
<li> Distance from Earth: ${distance}</li>
<li> Number of Moons: ${moons}</li>
</ol>
<img src="${imageUrl}">`

}


function validateInput(testInput) {

    if (testInput.trim() === "") {
        return "Empty"
    } else if (isNaN(testInput.trim()) === true) {
        return "Not a Number"
    } else if (isNaN(testInput.trim()) === false) {
        return "Is a Number"
    } else {
        console.log("huh?");
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   
   //Check using validateInput and alert the user approporately for each.
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert ("All fields are required!");
        } else {
            alert("Make sure to enter valid Information for each field!");
        }

    //Check level for fuel.
   } else if (fuelLevel < 10000) {
    faultyItems.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level is too low for launch`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";

    //Check weight limit of cargo.
   } else if (cargoLevel > 10000) {
    faultyItems.style.visibility = "visible";
    cargoStatus.innerHTML = 'Cargo weight is too high for launch';
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
    console.log("Try that again, buddy.");


   } else {
    launchStatus.innerHTML = `Shuttle is ready for launch`;
    launchStatus.style.color = "green";
    faultyItems.style.visibility = "hidden";
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
   }

   // Set names to pilotStatus and copilotStatus.
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor((Math.random() * 6))];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
