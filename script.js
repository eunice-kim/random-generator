var percentages = [0, 1, 5, 15, 25];
var glowColors = ["#00FFFF", "#FFFF00", "#0000FF"]
var animations = ["rotate", "blink", "shift", "none"]

var outputPercentage = document.getElementById("output-percentage");
document.getElementById("runButton").addEventListener("click", generate);

function generate() {
  var textInput = document.getElementById("text-input");
  var outputText = document.getElementById("output-text");
  var errorMessage = document.getElementById("error-message");

  if (textInput.value == "") {
    document.getElementById("error-message").classList.add("show");
  }

  else {
    document.getElementById("welcome").classList.remove("show");
    document.getElementById("intro-message").classList.remove("show");
    errorMessage.classList.remove("show");
    errorMessage.style.color = "white";
    outputText.classList.add("show");
    outputPercentage.classList.add("show");
    document.getElementById("again-message").classList.add("show");
    outputText.innerHTML = "You said you want to " + textInput.value + ".<br><br>the chance of this happening is...";

    var rand = Math.floor(Math.random() * 5);
    document.getElementById("number").innerHTML=percentages[rand];
    textInput.value = "";
    restyle();
  }
}

function restyle() {
  var randomR = Math.random() * 255;
  var randomG = Math.random() * 255;
  var randomB = Math.random() * 255;
  var randomR2 = Math.random() * 255;
  var randomG2 = Math.random() * 255;
  var randomB2 = Math.random() * 255;
  var randomGradient = "radial-gradient(rgb(" + randomR + "," + randomG + "," + randomB + "), rgb(" + randomR2 + "," + randomG2 + "," + randomB2 + "))";
  document.getElementById("bg").style.background = randomGradient;

  var rand = Math.floor(Math.random() * 3);
  outputPercentage.style.textShadow = "0 0 5vmin " + glowColors[rand];

  var rand = Math.floor(Math.random() * 4);
  outputPercentage.style.animationName = animations[rand];
}
