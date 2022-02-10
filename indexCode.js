var tabOpen=1
function openTab(x) {
  tabOpen=x
}
window.setInterval(function(){
  document.getElementById("buttonIntroduction").className = (tabOpen==1) ? "buttonon" : "buttonoff";
  document.getElementById("Introduction").style.display = (tabOpen==1) ? "inline-block" : "none";
  document.getElementById("buttonFundamentalFunctions").className = (tabOpen==2) ? "buttonon" : "buttonoff";
  document.getElementById("Fundamental Functions").style.display = (tabOpen==2) ? "inline-block" : "none";
}, 50);
