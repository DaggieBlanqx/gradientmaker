
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
    try { // for modern browsers
        document.querySelectorAll(className).forEach(function(item) { item.textContent = text; });
    } catch(e) { // for internet explorer
        Array.prototype.forEach.call(document.querySelectorAll(className), function (item) {
            item.textContent = text;
        }); 
    }
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
    updateText(".direction-text", direction);
    updateText(".colourleft-text", colourLeft);
    updateText(".colourright-text", colourRight);
};

// hide code block
document.getElementById("btn-code-hide").onclick = function() {
    document.getElementById("control-panel").classList.remove("hidden");
    document.getElementById("code-panel").classList.add("hidden");
};

// copy code
document.getElementById("btn-code-copy").onclick = function() {
    // function to display message
    function codeCopyMessage(message) {
        document.getElementById("copy-msg").textContent = message;
    }
    // select code text
    var copyCodeArea = document.querySelector(".code");
    window.getSelection().selectAllChildren(copyCodeArea);
    // try to copy to clipboard
    try {
        var copied = document.execCommand('copy');
        if (!copied) {
            throw 'Unable to copy';
        } else {
            codeCopyMessage('Yes! CSS is copied, paste away!');
        }
    } catch (err) {
        codeCopyMessage('Oops, unable to copy, use right click + copy');
    }
};