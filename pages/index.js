let popupElement = document.querySelector('.popup');
let sectionProfile = document.querySelector('.profile');
let editButton = sectionProfile.querySelector('.profile__edit');
let closeButton = popupElement.querySelector('.popup__close-button');



editButton.addEventListener('click', function(){
    popupElement.classList.add('popup_opened');
})

closeButton.addEventListener('click', function(){
    popupElement.classList.remove('popup_opened');
})

let profileHeader = sectionProfile.querySelector('.profile__header');
let profileHeaderText = profileHeader.textContent;
let profileText = sectionProfile.querySelector('.profile__text');
let profileTextAbout = profileText.textContent;
let inputName = popupElement.querySelector('.popup__form-name');
let inputAbout = popupElement.querySelector('.popup__form-about');
let formElement = popupElement.querySelector('.popup__form');
let SubmitButton = popupElement.querySelector('.popup__form-submit');


editButton.addEventListener('click', function(){
    inputName.setAttribute('value', profileHeaderText);
    inputAbout.setAttribute('value', profileTextAbout);
})


function formSubmitHandler (evt) {
    evt.preventDefault();
}

formElement.addEventListener('submit', formSubmitHandler); 
