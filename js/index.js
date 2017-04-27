
// get the colour inputs
var colourInputs = document.querySelectorAll('#colour-picker input');

function updateColour() {
    console.log(this.name);
}

// run function on colour change
colourInputs.forEach(function(input) {
    input.addEventListener('change', updateColour);
});