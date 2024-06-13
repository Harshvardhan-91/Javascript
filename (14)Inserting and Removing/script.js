console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").innerText);

//Edit the inner html
//document.querySelector(".box").innerHTML = "Hey I am Harsh";

//Insertion Methods
let div1 = document.createElement("div");
div1.innerHTML = "I have been inserted";
div1.setAttribute("class", "created");
document.querySelector(".container").append(div1);
