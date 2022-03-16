var element = document.getElementById("test");
function changeAttr() {
  
  element.setAttribute("value","Submit is changed");
  
}
element.addEventListener("click", changeAttr);
