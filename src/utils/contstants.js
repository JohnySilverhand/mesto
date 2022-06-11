export const buttonProfileEdit = document.querySelector('.profile__edit');
export const buttonAddProfile = document.querySelector('.profile__add-button');
export const editForm = document.querySelector('#edit');
export const avatarForm = document.querySelector('.popup-avatar');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputAbout = document.querySelector('.popup__input_type_about');
export const buttonElementsSubmit = document.querySelector('.popup__form-submit_add');
export const popupAddFormName = document.querySelector('.popup__input_type_header');
export const popupAddFormImageLink = document.querySelector('.popup__input_type_src');
export const elementsContainer = document.querySelector('.elements');
export const userInfo = {
  name: '.profile__header',
  about: '.profile__text',
  avatarSelector: '.profile__image'
}
export const addForm = document.querySelector('#add');
export const initialCards = [
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
export const formObj = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButton: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 
