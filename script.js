// Write your JavaScript code here!
window.addEventListener("load", function() {

    const div = document.getElementById("missionTarget");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   listedPlanets = myFetch();
   let listedPlanetsResponse = listedPlanets;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(div, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });

   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
        event.preventDefault();
        formSubmission(document, listedPlanets, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    });

});