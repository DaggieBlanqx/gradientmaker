
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

// function to update text
var updateText = function(className, text) {
    Array.prototype.forEach.call(document.querySelectorAll(className), function (item) {
        item.textContent = text;
    });
};

// code buttons
document.getElementById("btn-code-show").onclick = function() {
    // show code block
    document.getElementById("control-panel").classList.add("hidden");
    document.getElementById("code-panel").classList.remove("hidden");
    // update code text values
    var direction = document.documentElement.style.getPropertyValue('--direction') || "left"; // defaults to left
    var colourLeft = document.documentElement.style.getPropertyValue('--colourleft') || "#764ba2";
    var colourRight = document.documentElement.style.getPropertyValue('--colourright') || "#667eea";
    console.log(direction);
    updateText(".direction-text", direction);
    // document.querySelectorAll(".direction-text").forEach(function(item) { item.textContent = direction; });
    // Array.prototype.forEach.call(document.querySelectorAll(".direction-text"), function (item) {
    //     item.textContent = direction;
    // });
    document.getElementsByClassName("colourleft-text").textContent = colourLeft;
    document.getElementsByClassName("colourright-text").textContent = colourRight;
};

document.getElementById("btn-code-hide").onclick = function() {
    document.getElementById("control-panel").classList.remove("hidden");
    document.getElementById("code-panel").classList.add("hidden");
};