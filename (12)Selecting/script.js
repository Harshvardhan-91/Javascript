console.log("Selecting by ids and classes");

//By class
//let boxes = document.getElementsByClassName("box");
//console.log(boxes);

//boxes[2].style.backgroundColor = "yellow";

//By ids
//document.getElementById("red").style.backgroundColor = "red";

//Query Selector
//document.querySelector(".box").style.backgroundColor = "green"; // Only first one is green

//Query Selector All(It returns html collection or node list therfore we have to use loops)
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});

//By tag name
console.log(document.getElementsByTagName("div"));
