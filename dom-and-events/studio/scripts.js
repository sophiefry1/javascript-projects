
 window.addEventListener("load", function(){

   const takeoffButton = document.getElementById("takeoff");
   const landButton = document.getElementById("landing");
   const abortMission = document.getElementById("missionAbort");

   const flightStatus = document.getElementById("flightStatus");
   const shuttleBackground = document.getElementById("shuttleBackground");
   const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    takeoffButton.addEventListener("click", function(){
   
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (shouldTakeOff){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
 });
        
 landButton.addEventListener("click", function (){
        alert("The shuttle is landing. Landing gear engaged.");
       flightStatus.innerHTML = "The shuttle has landed.";
       shuttleBackground.style.backgroundColor = "green";
       spaceShuttleHeight.innerHTML = "0"
 });

  abortButton.addEventListener("click", function (){
let shouldAbort = confirm("Confirm that you want to abort the mission.");

if (shouldAbort){
   flightStatus.innerHTML = "Mission aborted";
   shuttleBackground.style.backgroundColor = "green";
   spaceShuttleHeight.innerHtml = "0";
}
 
})

