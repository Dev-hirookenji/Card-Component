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
function closeCard2() {
  var card2 = document.getElementById("card2");
  card2.style.opacity = 0;
  setTimeout(function () {
    card2.style.display = "none";
  }, 300);
}
