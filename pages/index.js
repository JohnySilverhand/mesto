const popup = document.querySelector('.popup'); 
const profilePopup = document.querySelector('.popup_edit');
const elementsPopup = document.querySelector('.popup_add');
const imagePopup = document.querySelector('.popup_open-image');
const buttonEdit = document.querySelector('.profile__edit');
const buttonClose = document.querySelector('.popup__close-button');
const profileHeader = document.querySelector('.profile__header');
const profileText = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__form');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputAbout = formElement.querySelector('.popup__input_type_about');
const submitProfileButton = document.querySelector('.popup__form-submit_profile');


function openProfilePopup(){
  openPopup();
  inputName.value = profileHeader.textContent;
  inputAbout.value = profileText.textContent;
}
buttonEdit.addEventListener('click', openProfilePopup);


function openPopup (){
  popup.classList.add('popup_opened');
}



function closeForm (){
  popup.classList.remove('popup_opened');
}
buttonClose.addEventListener('click', closeForm);



function formSubmitHandler(evt) {
   evt.preventDefault();
   profileHeader.textContent = inputName.value;
   profileText.textContent = inputAbout.value;
   closeForm();
}
formElement.addEventListener('submit', formSubmitHandler); 

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


const elementsTemplate = document.querySelector('#new-card').content.cloneNode(true);
const elementsTemplateContainer = elementsTemplate;
const elementsContainer = document.querySelector('.element');
const elementContainer = elementsTemplate.querySelector('.element__container');
const popupAddFormName = document.querySelector('.popup__input_type_header');
const popupAddFormImageLink = document.querySelector('.popup__input_type_src');


const card = function(createCard) {
  const elementsTemplate = document.querySelector('#new-card').content.cloneNode(true);
  const elementsTemplateContainer = elementsTemplate;
  const elementsContainer = document.querySelector('.element');
  const elementContainer = elementsTemplate.querySelector('.element__container');
  elementContainer.querySelector('.element__text').textContent = createCard.name;
  elementContainer.querySelector('.element__image').src = createCard.link;
  elementContainer.querySelector('.element__image').alt = elementContainer.querySelector('.element__text').textContent;
  elementsContainer.prepend(elementsTemplateContainer);

  elementContainer.querySelector('.element__like').addEventListener('click', function(event){
    event.target.classList.toggle('element__like_active')
  });

  elementContainer.querySelector('.element__delete-card').addEventListener('click', function(){
    elementContainer.remove();
  });
  
  const containerImage = elementContainer.querySelector('.element__image');
  const imageOpen = document.querySelector('.popup__image');
  const imagePopup = document.querySelector('.popup_open-image');
  const imagePopupCloseButton = document.querySelector('.popup__close-button_image');
  const imagePopupText = document.querySelector('.popup__image-text');
  containerImage.addEventListener('click', function() {
    imagePopup.classList.add('popup_opened');
    imageOpen.src = createCard.link;
    imagePopupText.textContent = createCard.name;
    imageOpen.alt = imagePopupText.textContent;
  });
  imagePopupCloseButton.addEventListener('click', () => {
    imagePopup.classList.remove('popup_opened');
  });

  return elementContainer;
};

const renderElements = (createCard) => {
  elementsContainer.prepend(card(createCard));
}


const addElements = (event) => {
  event.preventDefault();
  initialCards.name = popupAddFormName.value;
  initialCards.link = popupAddFormImageLink.value;
    renderElements(initialCards);
    popupAddFormName.value ='';
    popupAddFormImageLink.value ='';
    popupClose();
}

const elements = initialCards.map(createCard => {
  return card(createCard);
})

elementsContainer.append(elements);

submitProfileButton.addEventListener('click', addElements);




const popupAddCardForm = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAddForm = document.querySelector('.popup__close-button_add');
 
function openAddForm (){
  elementsPopup.classList.add('popup_opened');
 }
addButton.addEventListener('click', openAddForm);

function closeAddForm (){
  elementsPopup.classList.remove('popup_opened');
 }
closeButtonAddForm.addEventListener('click', closeAddForm);


function formSubmitHandlerProfile (event) {
  event.preventDefault();
 }
 elementsPopup.addEventListener('submit', formSubmitHandlerProfile);






