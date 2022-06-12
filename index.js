let btn = document.querySelector("button");
let errorP = document.querySelector("small");
let email = document.querySelector("input");

btn.addEventListener("click", (e) => {
  let emailValue = email.value;
  e.preventDefault();
  if (!validateEmail(emailValue)) {
    errorP.classList.remove("d-none");
    email.style.borderColor = "hsl(0, 93%, 68%)";
  } else {
    location.reload();
  }
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
