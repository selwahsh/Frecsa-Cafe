function clickBar() {
  var x = document.getElementsByClassName("mobileList");
  x = x[0];
  if (x.className === "mobileList") {
    x.className = "mobileList hide";
  } else {
    x.className = "mobileList";
  }
}
