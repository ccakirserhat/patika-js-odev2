// // dom

let inputDOM = document.querySelector("#task");
let buttonDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let ulLength = document.getElementsByTagName("li");

$(document).ready(function () {
  if (localStorage.getItem("list")) {
    listDOM.innerHTML = localStorage.getItem("list");
  } else {
    listDOM.innerHTML = "";
  }
});

inputDOM.focus();

function newElement() {
  if (!inputDOM.value || inputDOM.value.trim() == "") {
    alert("hata");
  } else {
    listDOM.innerHTML += `<li onclick="checkElement(this)"> ${inputDOM.value} <span class="close" onclick="deleteElement(this.parentNode)">X</span> </li>`;
    inputDOM.value = "";
    localStorage.setItem("list", listDOM.innerHTML);
  }
}

function deleteElement(id) {
  listDOM.removeChild(id);
  inputDOM.value = "";
  localStorage.setItem("list", listDOM.innerHTML);
}

function checkElement(id) {
  id.classList.toggle("checked");
  localStorage.setItem("list", listDOM.innerHTML);
}
