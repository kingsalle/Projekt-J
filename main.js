alert("Denne side er ikke starstable");
alert("Dette er kopi af hjemmesiden brugt til et skole pjoket. ");
alert("Side Nyheder, Apps og Community virker");

function changeText() {
  document.getElementsByTagName("h2")[0].innerHTML = "Bliv en STAR RIDER";
}

function resetText() {
  document.getElementsByTagName("h2")[0].innerHTML = "Spil gratis op til niveau 5";
}

setTimeout(function() {
  document.getElementById("popup").classList.add("show");
}, 2000);

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("popup").classList.remove("show");
});

let myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", function() {
  myButton.style.backgroundColor = "pink";
  myButton.style.color = "black";
  myButton.style.border = "none";
  myButton.style.transform = "scale(1.2)";
});

myButton.addEventListener("mouseout", function() {
  myButton.style.backgroundColor = "transparent";
  myButton.style.color = "white";
  myButton.style.transform = "scale(1)";
});

window.onload = function() {
    let video = document.getElementById("myVideo");
    let sources = [
      {src: "vi/ss2.mp4", type: "video/mp4"},
      {src: "vi/ss3.mp4", type: "video/mp4"},
      {src: "vi/ss4.mp4", type: "video/mp4"},
      {src: "vi/ss1.mp4", type: "video/mp4"}
    ];
    let index = Math.floor(Math.random() * sources.length);
    video.src = sources[index].src;
    video.type = sources[index].type;
    video.load();
  }
