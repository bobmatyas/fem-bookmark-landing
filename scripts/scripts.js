
const checkEmail = (event) => {

  event.preventDefault();

  const emailAddress = document.getElementById('signup_email_address').value;
  const inputHolderContainer = document.getElementById('signup_holder');

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (emailAddress.match(mailFormat)) {
    inputHolderContainer.classList.remove('signup__form__input__holder--red');
    const child = document.getElementById('signup_alert');
    inputHolderContainer.removeChild(child);
  } else if (!emailAddress.match(mailFormat)) {
    inputHolderContainer.classList.add('signup__form__input__holder--red');
    const alertParagraph = document.createElement('p');
    alertParagraph.setAttribute("id", "signup_alert");
    alertParagraph.classList.add('signup__form__input__holder__alert');
    const alertText = document.createTextNode("Whoops, make sure it's an email!");
    alertParagraph.appendChild(alertText);
    inputHolderContainer.appendChild(alertParagraph);
  }
}

let emailClick = document.getElementById('signup_email');

emailClick.addEventListener("click", checkEmail);

