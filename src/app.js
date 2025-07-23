document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const cardNumber = document.querySelector("input[name='cardNumber']");
  const cvc = document.querySelector("input[name='cvcNumber']");
  const amount = document.querySelector("input[name='amount']");
  const firstName = document.querySelector("input[name='firstName']");
  const lastName = document.querySelector("input[name='lastName']");
  const city = document.querySelector("input[name='city']");
  const state = document.querySelector("select[name='state']");
  const postalCode = document.querySelector("input[name='postalCode']");
  const message = document.querySelector("textarea[name='message']");

  const errorAlert = document.querySelector(".alert");
  errorAlert.style.display = "none"; 

  const allFields = [
    cardNumber,
    cvc,
    amount,
    firstName,
    lastName,
    city,
    state,
    postalCode,
    message
  ];

  allFields.forEach((field) => {
    field.style.backgroundColor = "white";
  });

  let hasError = false;

  if (!/^\d{13,16}$/.test(cardNumber.value)) {
    hasError = true;
    cardNumber.style.backgroundColor = "#ffcccc";
  }

  if (!/^\d{3,4}$/.test(cvc.value)) {
    hasError = true;
    cvc.style.backgroundColor = "#ffcccc";
  }

  if (!/^\d+(\.\d{1,2})?$/.test(amount.value)) {
    hasError = true;
    amount.style.backgroundColor = "#ffcccc";
  }

  if (firstName.value.trim() === "") {
    hasError = true;
    firstName.style.backgroundColor = "#ffcccc";
  }

  if (lastName.value.trim() === "") {
    hasError = true;
    lastName.style.backgroundColor = "#ffcccc";
  }

  if (city.value.trim() === "") {
    hasError = true;
    city.style.backgroundColor = "#ffcccc";
  }

  if (state.value === "") {
    hasError = true;
    state.style.backgroundColor = "#ffcccc";
  }

  if (!/^\d{5}$/.test(postalCode.value)) {
    hasError = true;
    postalCode.style.backgroundColor = "#ffcccc";
  }

  if (message.value.trim() === "" || message.value.trim().length < 10) {
  hasError = true;
  message.style.backgroundColor = "#ffcccc";
}

  if (hasError) {
    errorAlert.style.display = "block";
    errorAlert.innerText = "Please correct the highlighted fields.";
  } else {
    errorAlert.style.display = "none";
    alert("Form submitted successfully!");
  }
});
