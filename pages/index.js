let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');
let profileHeader = document.querySelector('.profile__header');
let profileText = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__form');
let inputName = formElement.querySelector('.popup__input_type_name');
let inputAbout = formElement.querySelector('.popup__input_type_about');



function openForm (){
    popupElement.classList.add('popup_opened');
    inputName.value = profileHeader.textContent;
    inputAbout.value = profileText.textContent;
}
editButton.addEventListener('click', openForm);


function closeForm (){
    popupElement.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeForm);



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



initialCards.forEach((item)=> {
  const elementsTemplate = document.querySelector('#new-card').content.cloneNode(true);;
  const elementsTemplateContainer = elementsTemplate;
  const elementsContainer = document.querySelector('.element');
  const elementContainer = elementsTemplate.querySelector('.element__container');
  elementContainer.querySelector('.element__text').textContent = item.name;
  elementContainer.querySelector('.element__image').src = item.link;
  elementsContainer.prepend(elementsTemplateContainer);
});

const popupAddFormName = document.querySelector('.popup__input_type_header');
const popupAddFormImageLink = document.querySelector('.popup__input_type_src');
const addNewCard = function(){
  const elementsTemplate = document.querySelector('#new-card').content.cloneNode(true);;
  const elementsTemplateContainer = elementsTemplate;
  const elementsContainer = document.querySelector('.element');
  const elementContainer = elementsTemplate.querySelector('.element__container');
  elementContainer.querySelector('.element__text').textContent = popupAddFormName.value;
  elementContainer.querySelector('.element__image').src = popupAddFormImageLink.value;
  elementsContainer.prepend(elementsTemplateContainer);
}


const popupAddCardForm = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAddForm = document.querySelector('.popup__close-button_add');
 
function openAddForm (){
   popupAddCardForm.classList.add('popup_opened');
 }
addButton.addEventListener('click', openAddForm);

function closeAddForm (){
   popupAddCardForm.classList.remove('popup_opened');
 }
closeButtonAddForm.addEventListener('click', closeAddForm);

const submitProfileButton = document.querySelector('.popup__form-submit_profile');
function formSubmitHandlerProfile (event) {
  event.preventDefault();
  closeAddForm();
  addNewCard();
 }
popupAddCardForm.addEventListener('submit', formSubmitHandlerProfile);




