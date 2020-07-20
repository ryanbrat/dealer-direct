function hideFunction() {
  var element = document.getElementById("recent-deals");

  if (element.classList) {
    element.classList.toggle("hide");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("hide");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("hide");
      element.className = classes.join(" ");
  }
}

// var coll = document.getElementsByClassName("show-hide");
// var i;
//
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("hide");
//     var recentDeals = this.nextElementSibling;
//     if (recentDeals.style.maxHeight){
//       recentDeals.style.maxHeight = null;
//     } else {
//       recentDeals.style.maxHeight = recentDeals.scrollHeight + "px";
//     }
//   });
// }
