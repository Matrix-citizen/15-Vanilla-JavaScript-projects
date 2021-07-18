const modalButton = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');

const modalControl = () => modalOverlay.classList.toggle('open-modal');

modalButton.addEventListener('click', modalControl);
closeButton.addEventListener('click', modalControl);
