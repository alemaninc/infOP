var tabOpen=1
function openTab(x) {
  tabOpen=x
}
window.setInterval(function(){
  document.getElementById("buttonIntroduction").className = (tabOpen==1) ? "buttonon" : "buttonoff";
  document.getElementById("Introduction").style.display = (tabOpen==1) ? "inline-block" : "none";
  document.getElementById("buttonFundamentalFunctions").className = (tabOpen==2) ? "buttonon" : "buttonoff";
  document.getElementById("Fundamental Functions").style.display = (tabOpen==2) ? "inline-block" : "none";
  document.getElementById("buttonSoftcaps").className = (tabOpen==3) ? "buttonon" : "buttonoff";
  document.getElementById("Softcaps").style.display = (tabOpen==3) ? "inline-block" : "none";
  document.getElementById("buttonScalings").className = (tabOpen==4) ? "buttonon" : "buttonoff";
  document.getElementById("Scalings").style.display = (tabOpen==4) ? "inline-block" : "none";
  document.getElementById("buttonMiscellaneous").className = (tabOpen==-1) ? "buttonon" : "buttonoff";
  document.getElementById("Miscellaneous").style.display = (tabOpen==-1) ? "inline-block" : "none";
  document.getElementById("buttonChangelog").className = (tabOpen==-2) ? "buttonon" : "buttonoff";
  document.getElementById("Changelog").style.display = (tabOpen==-2) ? "inline-block" : "none";
}, 50);
