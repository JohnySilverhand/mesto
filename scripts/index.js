const profilePopup = document.querySelector('.popup_edit');
const elementsPopup = document.querySelector('.popup_add');
const imagePopup = document.querySelector('.popup_open-image');
const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonCloseEdit = document.querySelector('.popup__close-button_edit');
const profileHeader = document.querySelector('.profile__header');
const buttonAddProfile = document.querySelector('.profile__add-button');
const profileText = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__form');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputAbout = formElement.querySelector('.popup__input_type_about');
const buttonProfileSubmit = document.querySelector('.popup__form-submit_profile');
const buttonElementsSubmit = elementsPopup.querySelector('.popup__form-submit_add');
const buttonCloseImage = imagePopup.querySelector('.popup__close-button_image');
const buttonCloseAdd = elementsPopup.querySelector('.popup__close-button_add');
const popupAddFormName = document.querySelector('.popup__input_type_header');
const popupAddFormImageLink = document.querySelector('.popup__input_type_src');
const elementsContainer = document.querySelector('.elements');
const imageOpen = document.querySelector('.popup__image');
const imagePopupText = document.querySelector('.popup__image-text');
const elementsTemplate = document.querySelector('#new-card').content;
const formObj = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 

function closePopupWhenOverlayClick(evt) {
  if(evt.target.classList.contains('popup_opened')){
    closePopup(evt.target);
  }
};

function closePopupWithKey(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

function openPopup (popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithKey);
}

function openProfilePopup(){
  inputName.value = profileHeader.textContent;
  inputAbout.value = profileText.textContent;
  openPopup(profilePopup);
}

function closePopup (popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithKey);
}

function formSubmitHandler(evt) {
   evt.preventDefault();
   profileHeader.textContent = inputName.value;
   profileText.textContent = inputAbout.value;
   closePopup(profilePopup);
}
formElement.addEventListener('submit', formSubmitHandler); 

const createCard = (card) => {
  const cardsTemplate = elementsTemplate.cloneNode(true);
  const elementContainer = cardsTemplate.querySelector('.element');
  const containerImage = elementContainer.querySelector('.element__image');
  elementContainer.querySelector('.element__text').textContent = card.name;
  containerImage.src = card.link;
  containerImage.alt = card.name;

  elementContainer.querySelector('.element__like').addEventListener('click', function(event){
    event.target.classList.toggle('element__like_active')
  });

  elementContainer.querySelector('.element__delete-card').addEventListener('click', function(){
    elementContainer.remove();
  });
  
  containerImage.addEventListener('click', function openImagePopup() {
    imageOpen.src = card.link;
    imagePopupText.textContent = card.name;
    imageOpen.alt = imagePopupText.textContent;
    openPopup(imagePopup);
  });

  return elementContainer;
};

const renderElements = (card) => {
  elementsContainer.prepend(createCard(card));
}

const addElements = (event) => {
  event.preventDefault();
  initialCards.name = popupAddFormName.value;
  initialCards.link = popupAddFormImageLink.value;
  renderElements(initialCards);
  closePopup(elementsPopup);
  popupAddFormName.value ='';
  popupAddFormImageLink.value ='';
}

const elements = initialCards.map(function(card){
  return createCard(card);
})

elementsContainer.append(...elements);

buttonElementsSubmit.addEventListener('click', addElements);

profilePopup.addEventListener('click', closePopupWhenOverlayClick);
elementsPopup.addEventListener('click', closePopupWhenOverlayClick);
imagePopup.addEventListener('click', closePopupWhenOverlayClick);

buttonAddProfile.addEventListener('click', ()=> {
  turnOffButton(buttonElementsSubmit);
  openPopup(elementsPopup);
});
buttonProfileEdit.addEventListener('click', ()=> {
  openProfilePopup();
});

buttonCloseEdit.addEventListener('click', ()=> {
  closePopup(profilePopup);
});
buttonCloseImage.addEventListener('click', ()=> {
  closePopup(imagePopup);
});
buttonCloseAdd.addEventListener('click', ()=> {
  closePopup(elementsPopup);
});



