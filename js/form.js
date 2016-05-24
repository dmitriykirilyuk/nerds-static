var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".btn-write-us-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=write-us-name]");
var email = popup.querySelector("[name=write-us-email]");
var storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
  name.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
});

form.addEventListener("submit", function(event) {
  if(!(name.value && email.value)) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name.value);
  }

});

window.addEventListener("keydown", function(event) {
  if(event.keyCode ==27) {
    if(popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
    }
  }
});
