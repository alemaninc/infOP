var tabOpen="Introduction"
function openTab(name) {
  tabOpen=name
}
function openTab(name) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "inline-block";  
}
window.setInterval(function(){
  document.getElementById("Introduction").style.display = (tabOpen=="Introduction") ? "inline-block" : "none";
}, 50);
