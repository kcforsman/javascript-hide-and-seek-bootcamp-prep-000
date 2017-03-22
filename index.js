function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div.target");
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < ranked.length; i++) {
    var children = ranked[i].children;

    for (let l = 0; l < children.length; l++) {
      children[l].innerHTML = parseInt(children[l].innerHTML) + n;
    }
  }
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node");
  var innerNode = grandNode.children[0];

  while (innerNode) {
    grandNode = innerNode;
    innerNode = grandNode.children[0];
  }
  return grandNode;
}