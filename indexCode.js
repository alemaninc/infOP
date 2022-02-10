var tabOpen="Introduction"
function openTab(name) {
  tabOpen=name
}
window.setInterval(function(){
  document.getElementById("buttonIntroduction").className = (tabOpen=="Introduction") ? "buttonon" : "buttonoff";
  document.getElementById("Introduction").style.display = (tabOpen=="Introduction") ? "inline-block" : "none";
  document.getElementById("buttonFundamentalFunctions").className = (tabOpen=="Fundamental Functions") ? "buttonon" : "buttonoff";
  document.getElementById("Fundamental Functions").style.display = (tabOpen=="Fundamental Functions") ? "inline-block" : "none";
}, 50);
