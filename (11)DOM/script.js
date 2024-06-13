console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1];
console.log(cont.firstElementChild);
cont.firstElementChild.style.backgroundColor = "yellow";
cont.lastElementChild.style.backgroundColor = "red";

//only element
console.log(document.body.firstElementChild.children);

//parent element
console.log(cont.lastElementChild.parentElement);

//next element child
console.log(document.body.firstElementChild.children[1].nextElementSibling);
