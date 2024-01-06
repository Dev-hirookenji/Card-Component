function showContent() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
function closeCard() {
  var card = document.getElementById("card");
  card.style.opacity = 0;
  setTimeout(function () {
    card.style.display = "none";
  }, 300);
}
