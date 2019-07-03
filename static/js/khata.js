let toggleHeight = function(elem) {
  if (getComputedStyle(elem)["height"] === "0px") {
    elem.style.maxHeight = elem.scrollHeight + "px";
  } else {
    elem.style.maxHeight = "0px";
  }
};
let toggleDisplay = function(elem) {
  elem.classList.toggle("d-none");
};
let zeroHeight = function(elem) {
  elem.style.maxHeight = "0px";
};
let checkClick = function() {
  if (!document.querySelector(".dropdown").contains(event.target)) {
    zeroHeight(document.querySelector(".dropdown-content"));
  }
  if (
    window.matchMedia("(max-width: 750px)").matches &&
    !document.querySelector("nav").contains(event.target)
  ) {
    document.querySelector(".all-menu").classList.add("d-none");
  }
};
window.onclick = function() {
  checkClick();
};
window.ontouchstart = function() {
  checkClick();
};
