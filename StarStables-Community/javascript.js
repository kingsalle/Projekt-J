var $Osc = {
  hover: function(event) {
    event.target.style.backgroundColor = "rgb(168, 160, 157)";
  },
  out: function(event) {
    event.target.style.backgroundColor = "rgb(251, 247, 245)";
  }

}
var $OscElement = document.getElementById("box1");
$OscElement.addEventListener("mouseover", $Osc.hover, false);
$OscElement.addEventListener("mouseout", $Osc.out, false);


var $OscElement = document.getElementById("box2");
$OscElement.addEventListener("mouseover", $Osc.hover, false);
$OscElement.addEventListener("mouseout", $Osc.out, false);


var $OscElement = document.getElementById("box3");
$OscElement.addEventListener("mouseover", $Osc.hover, false);
$OscElement.addEventListener("mouseout", $Osc.out, false);


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
