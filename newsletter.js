const form = document.querySelector("#subscribe-form");
const input = document.querySelector("#input");
const emailError = document.querySelector("#email-error");
const submit = document.querySelector("#submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = input.value.trim();
  const isValid = validateEmail(emailValue);

  if (!isValid) {
    emailError.style.display = "flex";
    input.style.backgroundColor = "hsla(4, 100%, 67%, 0.3)";
  } else {
    emailError.style.display = "none";
    window.location.href = "email-success.html";
  }
});

function validateEmail(email) {
  // Simple email regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
