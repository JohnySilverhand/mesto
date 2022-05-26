import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { buttonProfileEdit, buttonAddProfile, editForm, inputName, inputAbout, buttonElementsSubmit, popupAddFormName, 
  popupAddFormImageLink, elementsContainer, userInfo, addForm, initialCards, formObj } from '../utils/contstants.js';

const popupFormAdd = new PopupWithForm ({
  submitFormCallback: (item) => {
    const popupNewCard = createNewCard(item);
    createCard.addItem(popupNewCard);
    popupFormAdd.close();
  }
}, '.popup_add');
popupFormAdd.setEventListeners();

const openImagePopup = new PopupWithImage ('.popup_open-image');
openImagePopup.setEventListeners();

const newProfilePopup = new UserInfo (userInfo);

const changeDataProfilePopup = () => {
  const profileValue = newProfilePopup.getUserInfo();
  inputName.value = profileValue.name;
  inputAbout.value = profileValue.about;
  profileValidation.resetValidation();
  popupFormEdit.open();
}

const popupFormEdit =  new PopupWithForm ({
  submitFormCallback: (userInfo) => {
    newProfilePopup.setUserInfo(userInfo);
    popupFormEdit.close();
  }
}, '.popup_edit');
popupFormEdit.setEventListeners();



const createNewCard = (cardData) => {
  const card = new Card ({cardData, 
  handleCardClick: (name, link) => {
    openImagePopup.open(name, link);
  }}, '#new-card');
  const cardsElement = card.createCard();
  return cardsElement;
};

const renderElements = (items) => {
  const newCard = createNewCard(items);
  elementsContainer.prepend(newCard);
}

const addElement = (event) => {
  event.preventDefault();
  const cardData = {};
  cardData.name = popupAddFormName.value;
  cardData.link = popupAddFormImageLink.value;
  renderElements(cardData);
  popupFormAdd.close();
}

buttonElementsSubmit.addEventListener('click', addElement);
buttonAddProfile.addEventListener('click', () => {
  addCardValidation.resetValidation();
  popupFormAdd.open();
});

buttonProfileEdit.addEventListener('click', () => {
  changeDataProfilePopup();
});

const profileValidation = new FormValidator(formObj, editForm);
profileValidation.enableValidation();
const addCardValidation = new FormValidator(formObj, addForm);
addCardValidation.enableValidation();

const createCard = new Section ({
  items: initialCards,
  renderer: (item) => {
    const arrayCard = renderElements(item);
    createCard.addItem(arrayCard);
  }
}, '.elements');
createCard.renderItems();