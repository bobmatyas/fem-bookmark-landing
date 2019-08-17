'use strict';

const mobileMenu = document.getElementById('mobile_menu');


const showMobileMenu = () => {
  mobileMenu.classList.remove('mobile__nav--hidden');
}

const hideMobileMenu = () => {
  mobileMenu.classList.add('mobile__nav--hidden');
}

const mobileOpen = document.getElementById('menuOpen');

mobileOpen.addEventListener('click', showMobileMenu);

const mobileHide = document.getElementById('menuClose');

mobileHide.addEventListener('click', hideMobileMenu);

const addRedHover = (item, highlight) => {
  console.log(item);
  console.log(highlight);
  const addRed = document.getElementById(item);
  const addBlue = document.getElementById(highlight);

  const redHighlights = document.getElementsByClassName('features__menu__item__highlight--red');
  while(redHighlights.length > 0){
    redHighlights[0].classList.remove('features__menu__item__highlight--red');
  }
  addRed.classList.add('features__menu__item__highlight--red');
  
  const blueHighlights = document.getElementsByClassName('features__menu__item--blue');
  while(blueHighlights.length > 0){
    blueHighlights[0].classList.remove('features__menu__item--blue');
  }

  console.log(addBlue);
  addBlue.classList.add('features__menu__item--blue');
  
}

const changeFeatureTab = (item) => {
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
menuBookmarking.addEventListener("click", () => { changeFeatureTab('bookmarking'), addRedHover('bookmarking_underline', 'bookmarking_highlight') } );

const menuSpeedy = document.getElementById('menu_speedy');
menuSpeedy.addEventListener("click", () => { changeFeatureTab('speedy'), addRedHover('speedy_underline', 'speedy_highlight')} );

const menuEasy = document.getElementById('menu_easy');
menuEasy.addEventListener("click", () => { changeFeatureTab('easy'), addRedHover('easy_underline', 'easy_highlight')} );

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

const emailClick = document.getElementById('signup_email');

emailClick.addEventListener("click", checkEmail);