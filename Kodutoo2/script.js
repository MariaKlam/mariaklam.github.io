var addBtn = document.getElementById("add");
var input = document.getElementById("userInput");
var ul = document.getElementsByTagName("ul")[0];

// Check length of input field
function addItemLength() {
  return document.getElementById("userInput").value.length;
}
// Check how many li elements exist
function checkLis() {
  return document.getElementsByTagName("li").length;
}
//create new list item
function createListItem() {
  // Create li element, style it and append it to ul
  var li = document.createElement("li");
  li.classList.add("listItem");
  li.append(document.createTextNode(input.value));
  li.addEventListener("click", toggleDone);
  ul.appendChild(li);
  input.value = "";

  // Teist korda klikkides kriipsuta maha
  function toggleDone() {
    li.classList.toggle("done");
  }
}

function CardToListItem() {
  var card = document.createElement("card");
  card.classList.add("li");
  card.classList.add("ul");
  li.append(document.createTextNode(input.value));
  card.appendChild(li);
  li.appendChild(card);
  document.getElementById("card").appendChild(li);
}

// On click
function addClick() {
  if (addItemLength() > 0) {
    createListItem();
  }
}

// On keypress enter
function addKey(event) {
  if (addItemLength() > 0 && event.keyCode == 13) {
    createListItem();
  }
}

// function GetImage(myfile) {
//   return value.substring(myfile.lastIndexOf("\\") + 1);
// }

addBtn.addEventListener("click", addClick);
input.addEventListener("keypress", addKey);
