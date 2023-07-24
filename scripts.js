// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    const takeoffButton = document.getElementById('takeoff');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');


    takeoffButton.addEventListener("click", function() {
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff");

        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
    });
});
