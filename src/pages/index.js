import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

const elementsPopup = document.querySelector('.popup_add');
const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonAddProfile = document.querySelector('.profile__add-button');
const editForm = document.querySelector('#edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const buttonElementsSubmit = elementsPopup.querySelector('.popup__form-submit_add');
const popupAddFormName = document.querySelector('.popup__input_type_header');
const popupAddFormImageLink = document.querySelector('.popup__input_type_src');
const elementsContainer = document.querySelector('.elements');
const userInfo = {
  name: '.profile__header',
  about: '.profile__text'
}
const addForm = document.querySelector('#add');
const initialCards = [
	{
	  name: 'Колизей',
	  link: 'https://images.unsplash.com/photo-1647350737843-4e4f98139fc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80.jpg'
	},
	{
	  name: 'Витражи',
	  link: 'https://images.unsplash.com/photo-1647793065821-8d8315cf20f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80.jpg'
	},
	{
	  name: 'Китайские праздники',
	  link: 'https://images.unsplash.com/photo-1646729314120-be42ebffa28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80.jpg'
	},
	{
	  name: 'Запретный город',
	  link: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
	  name: 'Весна',
	  link: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80.jpg'
	},
	{
	  name: 'Бунарроти',
	  link: 'https://images.unsplash.com/photo-1576016770956-debb63d92058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80.jpg'
	}
];
 const formObj = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButton: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 

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

const profilePopup = () => {
  const profileValue = newProfilePopup.getUserInfo();
  inputName.value = profileValue.name;
  inputAbout.value = profileValue.about;
  profileValidation.resetValidation();
  popupFormEdit.open();
}

const popupFormEdit =  new PopupWithForm ({
  submitFormCallback: (userInfo) => {
    console.log(userInfo)
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
  addForm.reset();
}

buttonElementsSubmit.addEventListener('click', addElement);
buttonAddProfile.addEventListener('click', () => {
  popupFormAdd.open();
});

buttonProfileEdit.addEventListener('click', () => {
  profilePopup();
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