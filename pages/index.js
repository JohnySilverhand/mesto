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
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 


const cardsContainer = document.querySelector('.element');
 const makeCards = (makeElement) => {  
  return `<li class= "element__container">
     <img class="element__image" src=${makeElement.link}>
     <div class="element__flex-row">
       <h2 class="element__text">${makeElement.name}</h2>
       <button class="element__like" type="button"></button>
     </div>
   </li>`
 }

 const addCards = initialCards.map(makeElement => {
   return makeCards(makeElement);
 });

 cardsContainer.insertAdjacentHTML('afterbegin', addCards.join(''));


 const popupAddCard = document.querySelector('.popup_add');
 const addButton = document.querySelector('.profile__add-button');
 const closeButtonAddForm = document.querySelector('.popup__close-button_add');
 
 function openAddForm (){
   popupAddCard.classList.add('popup_opened');
 }
 addButton.addEventListener('click', openAddForm);

 function closeAddForm (){
   popupAddCard.classList.remove('popup_opened');
 }

 closeButtonAddForm.addEventListener('click', closeAddForm);