import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const profilePopup = document.querySelector('.popup_edit');
const elementsPopup = document.querySelector('.popup_add');
const popups = document.querySelectorAll('.popup');
console.log(popups);
const popupsCloseButton = document.querySelectorAll('.popup__close-button');
console.log(popupsCloseButton)
export const imagePopup = document.querySelector('.popup_open-image');
const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonCloseEdit = document.querySelector('.popup__close-button_edit');
const profileHeader = document.querySelector('.profile__header');
const buttonAddProfile = document.querySelector('.profile__add-button');
const profileText = document.querySelector('.profile__text');
const editForm = document.querySelector('#edit');
const inputName = editForm.querySelector('.popup__input_type_name');
const inputAbout = editForm.querySelector('.popup__input_type_about');
const buttonElementsSubmit = elementsPopup.querySelector('.popup__form-submit_add');
const buttonCloseImage = imagePopup.querySelector('.popup__close-button_image');
const buttonCloseAdd = elementsPopup.querySelector('.popup__close-button_add');
const popupAddFormName = document.querySelector('.popup__input_type_header');
const popupAddFormImageLink = document.querySelector('.popup__input_type_src');
const elementsContainer = document.querySelector('.elements');
const addForm = document.querySelector('#add');
const formValidator = {};
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

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

function closePopupWithKey(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

export function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithKey);
}

function openProfilePopup(){
  inputName.value = profileHeader.textContent;
  inputAbout.value = profileText.textContent;
  openPopup(profilePopup);
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithKey);
}

function changeProfileValue(evt) {
   evt.preventDefault();
   profileHeader.textContent = inputName.value;
   profileText.textContent = inputAbout.value;
   closePopup(profilePopup);
}

const createCard = (data) => {
  const card = new Card (data.name, data.link, '#new-card');
  const cardsElement = card.createCard();
  return cardsElement;
};

const renderElements = (items) => {
  const newCard = createCard(items);
  elementsContainer.prepend(newCard);
}

const addElement = (event) => {
  event.preventDefault();
  const cardData = {};
  cardData.name = popupAddFormName.value;
  cardData.link = popupAddFormImageLink.value;
  renderElements(cardData);
  closePopup(elementsPopup);
  addForm.reset();
}

const elements = initialCards.map(function(card){
  return createCard(card);
});

elementsContainer.append(...elements);

buttonElementsSubmit.addEventListener('click', addElement);

buttonAddProfile.addEventListener('click', () => {
  addCardValidation.resetValidation();
  openPopup(elementsPopup);
});
buttonProfileEdit.addEventListener('click', () => {
  profileValidation.resetValidation();
  openProfilePopup();
});

editForm.addEventListener('submit', changeProfileValue); 

const profileValidation = new FormValidator(formObj, editForm);
profileValidation.enableValidation();
const addCardValidation = new FormValidator(formObj, addForm);
addCardValidation.enableValidation();

