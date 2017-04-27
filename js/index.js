
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