
const addRedHover = (item) => {
  const addRed = document.getElementById(item);
  if (addRed.classList.contains('features__menu__item__highlight--red')) {
    addRed.classList.remove('features__menu__item__highlight--red');
  } else {
    addRed.classList.add('features__menu__item__highlight--red')
  }
}

const changeFeatureTab = (item) => {
  console.log(item);
  const featureImage = document.getElementById('features_tab_image');
  const featureHeading = document.getElementById('features_tab_heading');
  const featureDescription = document.getElementById('features_tab_description');

  let image = '';
  let heading = '';
  let description = '';
  
  if (item === 'speedy') {
      image = 'images/illustration-features-tab-2.svg';
      heading = 'Intelligent search';
      description = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  } else if (item === 'easy') {
      image = 'images/illustration-features-tab-3.svg';
      heading = 'Share your bookmarks';
      description = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
  } else if (item === 'bookmarking') {
      image = 'images/illustration-features-tab-1.svg';
      heading = 'Bookmark in one click';
      description = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';

  }

  featureImage.setAttribute('src', image);
  featureHeading.textContent = heading;
  featureDescription.textContent = description;
}

const menuBookmarking = document.getElementById('menu_bookmarking');

menuBookmarking.addEventListener("mouseover", () => { addRedHover('bookmarking_underline') } );
menuBookmarking.addEventListener("mouseout", () => { addRedHover('bookmarking_underline') } );
menuBookmarking.addEventListener("click", () => { changeFeatureTab('bookmarking') } );

const menuSpeedy = document.getElementById('menu_speedy');

menuSpeedy.addEventListener("mouseover", () => { addRedHover('speedy_underline') } );
menuSpeedy.addEventListener("mouseout", () => { addRedHover('speedy_underline') } );
menuSpeedy.addEventListener("click", () => { changeFeatureTab('speedy')} );

const menuEasy = document.getElementById('menu_easy');

menuEasy.addEventListener("mouseover", () => { addRedHover('easy_underline') } );
menuEasy.addEventListener("mouseout", () => { addRedHover('easy_underline') } );
menuEasy.addEventListener("click", () => { changeFeatureTab('easy')} );

const checkEmail = (event) => {

  event.preventDefault();

  const emailAddress = document.getElementById('signup_email_address').value;
  const inputHolderContainer = document.getElementById('signup_holder');
  const emailInput = document.getElementById('signup_email_address');

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (emailAddress.match(mailFormat)) {
    inputHolderContainer.classList.remove('signup__form__input__holder--red');
    emailInput.classList.remove('signup__form__input--alert');
    const child = document.getElementById('signup_alert');
    inputHolderContainer.removeChild(child);
  } else if (!emailAddress.match(mailFormat)) {

    /* add check if it already exists! */

    inputHolderContainer.classList.add('signup__form__input__holder--red');

    if (!document.getElementById('signup_alert')) {
      const alertParagraph = document.createElement('p');
      alertParagraph.setAttribute("id", "signup_alert");
      alertParagraph.classList.add('signup__form__input__holder__alert');
      emailInput.classList.add('signup__form__input--alert');
      const alertText = document.createTextNode("Whoops, make sure it's an email!");
      alertParagraph.appendChild(alertText);
      inputHolderContainer.appendChild(alertParagraph);
    }
  }
}

let emailClick = document.getElementById('signup_email');

emailClick.addEventListener("click", checkEmail);

