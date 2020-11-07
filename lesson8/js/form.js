// shows value for range slider in storm center for storm severity

let range = document.getElementById("storm-range");
let index = document.getElementById("storm-index");

index.innerHTML = range.value;  // shows initial value on page load

range.oninput = function() {
    index.innerHTML = range.value;  // shows updated value everytime it slides
}