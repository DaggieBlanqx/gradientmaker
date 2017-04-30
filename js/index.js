
// get the colour inputs
var colourInputs = document.querySelectorAll('#colour-picker input');

// function for when colour input changes
function updateColour() {
    document.documentElement.style.setProperty('--' + this.name, this.value); //update the css variables
}

// run function on colour change
colourInputs.forEach(function(input) {
    input.addEventListener('change', updateColour);
});

// rotate button
document.getElementById("btn-rotate").onclick = function() {
    var directions = {
        "top": "right",
        "right": "bottom",
        "bottom": "left",
        "left": "top"
    };
    var direction = document.documentElement.style.getPropertyValue('--direction');
    var newDirection = "top"; // default first change with direction will have no value
    if (direction) {
        newDirection = directions[direction]; // get the key from the directions object to get the new value
    }
    document.documentElement.style.setProperty('--direction', newDirection); //update the css variables
};

// code buttons
document.getElementById("btn-code-show").onclick = function() {
    document.getElementById("control-panel").classList.add("hidden");
    document.getElementById("code-panel").classList.remove("hidden");
};

document.getElementById("btn-code-hide").onclick = function() {
    document.getElementById("control-panel").classList.remove("hidden");
    document.getElementById("code-panel").classList.add("hidden");
};