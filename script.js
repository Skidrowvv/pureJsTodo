let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "li") {
      ev.target.classList.toggle("checked");
    } else if (ev.target.tagName === "SPAN") {
      let div = ev.target.parentNode;
      div.remove();
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("toDoEl").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("Write please!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("toDoEl").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}
