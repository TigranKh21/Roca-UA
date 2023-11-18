// --------------------Modal--------------------

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  loginEmailEl: document.querySelector('.js-loginEmail'),
  loginPassword: document.querySelector('.js-loginPassword'),
  loginFormEl: document.querySelector('.js-modalForm'),
  testMeBtn: document.querySelector('.js-testMeBtn'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.loginFormEl.addEventListener('submit', onLogin);

function onLogin(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;
  console.log(email, password);
}
