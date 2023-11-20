import { langs } from './js/lang';

// --------------------Modal--------------------

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  loginEmailEl: document.querySelector('.js-loginEmail'),
  loginPassword: document.querySelector('.js-loginPassword'),
  loginFormEl: document.querySelector('.js-modalForm'),
  langBtn: document.querySelector('[data-modal-lang]'),
  changeLangEl: document.querySelector('.js-langBtn'),
};

const allLangs = ['en', 'ua'];

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.loginFormEl.addEventListener('submit', onLogin);
//refs.langBtn.addEventListener('click', onLangModal);
refs.changeLangEl.addEventListener('change', onChangeURLLanguage);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function onLogin(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;
  console.log(email, password);
}

/* function onLangModal() {
  pass;
}
 */
function onChangeURLLanguage() {
  let lang = refs.changeLangEl.value;
  location.href = window.location.pathname + '#' + lang;
  onChangeLanguage();
  //location.reload();
}

function onChangeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLangs.includes(hash)) {
    location.href = window.location.pathname + '#en';
    //location.reload();
  }
  refs.changeLangEl.value = hash;
  document.querySelector('title').innerHTML = langs['pageName'][hash];
  for (let key in langs) {
    const elem = document.querySelector('.lang-' + key);
    if (elem) {
      elem.innerHTML = langs[key][hash];
    }
  }
}
