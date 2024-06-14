let button = document.getElementById("btn");

button.addEventListener("click", () => {
  document.querySelector(".box").innerHTML = "<b> Yayy you were clicked </b>";
});

button.addEventListener("contextmenu", () => {
  alert("Don't right click this!");
});
