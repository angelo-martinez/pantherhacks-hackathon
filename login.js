var bgVid = document.getElementById('bgVideo');
var logInBtn = document.querySelector('.js-login');
var registerBtn = document.querySelector('.js-register');

bgVid.playbackRate = 0.4;

logInBtn.addEventListener('click', () => {
  document.querySelector('.js-login-wrapper').classList.add('is-logging-in');
});
