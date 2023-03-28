function lisa_kaart() {
  var title = document.getElementById("title-input").value;
  var text = document.getElementById("text-input").value;

  var cardHTML = `
    <div class="card" style="order: -1;">
    <img class="card-img" src="pilt1.jpg">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
    </div>
    `;

  var cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML += cardHTML;
}
