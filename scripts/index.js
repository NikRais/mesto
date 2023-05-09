/*Присвоение переменных*/
let buttonPopupOpen = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');
let inputName = document.getElementById('name');
let inputProfession = document.getElementById('profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened');

function openPopup () {
    togglePopupState(popup);
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
};
/*Форма*/
function formSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    togglePopupState(popup);
}
/*Обработчики */
buttonPopupClose.addEventListener('click', () => togglePopupState(popup));
popupForm.addEventListener('submit', formSubmit);
buttonPopupOpen.addEventListener('click', (openPopup));
