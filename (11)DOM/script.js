console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1];
console.log(cont.firstElementChild);
cont.firstElementChild.style.backgroundColor = "yellow";
cont.lastElementChild.style.backgroundColor = "red";

//parent element
console.log(cont.lastElementChild.parentElement);

//accessing all childs at one time
