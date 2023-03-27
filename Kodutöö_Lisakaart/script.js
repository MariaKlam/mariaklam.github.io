function newcard() {
  var node1 = document.createElement("div");
  node3.innerHTML = "div";
  var node2 = document.createElement("p");
  node2.innerHTML = "test para";
  var node3 = document.createElement("img");
  node3.innerHTML = "picture";

  node3.classList.add("test1");
  node3.classList.add("test2");
  node1.appendChild(node3);
  node1.appendChild(node2);
  document.getElementById("card").appendChild(node1);

  node2.appendChild(node1);
  node2.appendChild(node3);
  document.getElementById("card").appendChild(node2);

  node3.appendChild(node2);
  node3.appendChild(node1);
  document.getElementById("card").appendChild(node3);
}
