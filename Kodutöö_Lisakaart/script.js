// function newcard() {
//   var node1 = document.createElement("card");
//   var node2 = document.createElement("p");
//   node2.innerHTML = "test para";
//   var node3 = document.createElement("img");
//   node3.innerHTML = "picture";
//   node3.classList.add("test1");
//   node3.classList.add("test2");
//   node1.appendChild(node3);
//   node1.appendChild(node2);
//   document.getElementById("test").appendChild(node1);

//   node2.appendChild(node1);
//   node2.appendChild(node3);
//   document.getElementById("test").appendChild(node2);

//   node3.appendChild(node2);
//   node3.appendChild(node1);
//   document.getElementById("test").appendChild(node3);

//   var imageName = GetImage(document.getElementById("myfile").value);
//   console.log(imageName);
// }
// function GetImage(value) {
//   return value.substring(value.lastIndexOf("\\") + 1);
// }

// var link = document.createElement("node2");
// document.getElementById("node2").appendChild(txt);

// ////////////////////////////////////////////

// function addtext(what) {
//   if (document.createTextNode) {
//     var mytext = document.createTextNode(what);
//     document.getElementById("mydiv").appendChild(node1);
//   }
// }
/////////////////
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

  // Toggle line-through on click
  function toggleDone() {
    li.classList.toggle("done");
  }
}

// On click
function addClick() {
  if (addItemLength() > 0) {
    createListItem();
  }
}
addBtn.addEventListener("click", addClick);
//////////////////
// Create element:
const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";

// Append to another element:
document.getElementById("myDIV").appendChild(para);
