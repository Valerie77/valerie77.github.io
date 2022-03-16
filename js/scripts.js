var element = document.getElementById("test");
function changeAttr() {
  element.SetAttribute("value","Submit is changed");
}
element.addeventListener("click", changeAttr);
