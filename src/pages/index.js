import './index.css';


import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { buttonProfileEdit, buttonAddProfile, editForm, inputName, inputAbout, buttonElementsSubmit, popupAddFormName, 
  popupAddFormImageLink, elementsContainer, userInfo, addForm, initialCards, formObj } from '../utils/contstants.js';
import { Api } from '../components/Api';
import { PopupDeleteImage } from '../components/PopupDeleteImage.js';

const api = new Api({
url: 'https://mesto.nomoreparties.co/v1/cohort-42',
headers: {
   authorization:'b50f3450-54d5-4593-a544-5015c37d1c2e',
  'Content-Type':'application/json',
}
});
let userId;

Promise.all([
  api.getCards(),
  api.getProfileInfo()
]).then(([card, user]) => {
  userId = user._id;
  createCard.renderItems(card);
}).catch((err) => {
  console.log(err);
})

  const popupFormAdd = new PopupWithForm ({
  submitFormCallback: (cardData) => {
    api.addCards(cardData)
      .then((cardData) => {
        const cardFromPopup = createNewCard(cardData);
        createCard.addItem(cardFromPopup);
        popupFormAdd.close();
      })
      .catch((err) => {
        console.log(err);
      })
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

/*const popupFormDelete = new PopupDeleteImage ({
  submitFormCallback: (card, element, id) => {
    api.deleteCard(card, id)
      .then((data) => {
        element.remove();
        popupFormDelete.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, '.popup-delete');
popupFormDelete.setEventListeners();*/


const createNewCard = (cardData) => {
  const card = new Card ({cardData, 
  handleCardClick: (name, link) => {
    openImagePopup.open(name, link);
  },
  deleteAddedCard: (card, id) => {
    popupFormDelete.open(card, id);
  },
  likeNewCard: (card, id) => {
    api.likeCard(card, id)
    .then((cardData) => {
      card.querySelector('.element__like').classList.add('element__like_active');
      card.querySelector('.element__counter').textContent = cardData.likes.length; 
    })
    .catch((err) => {
      console.log(err);
    })
  },
  dislikeCard: (card, id) => {
    api.dislikeCard(card, id)
    .then((cardData) => {
      card.querySelector('.element__like').classList.remove('element__like_active');
      card.querySelector('.element__counter').textContent = cardData.likes.length; 
    })
    .catch((err) => {
      console.log(err);
    })
  }}, userId, '#new-card');
  const cardsElement = card.createCard();
  return cardsElement;
};

const profileValidation = new FormValidator(formObj, editForm);
profileValidation.enableValidation();
const addCardValidation = new FormValidator(formObj, addForm);
addCardValidation.enableValidation();

const createCard = new Section ({
  renderer: (cards) => {
    createCard.addItem(createNewCard(cards));
  }
}, '.elements');


buttonAddProfile.addEventListener('click', () => {
  addCardValidation.resetValidation();
  popupFormAdd.open();
});

buttonProfileEdit.addEventListener('click', () => {
  changeDataProfilePopup();
});