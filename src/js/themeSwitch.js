export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitchInput = document.querySelector('#theme-switch-toggle');

themeSwitchInput.addEventListener('change', onSwitchClick);

const savedTheme = localStorage.getItem('theme'); // null
const isSwitchInputChecked = JSON.parse(localStorage.getItem('isSwitchChecked')); // null

if (savedTheme != null || Theme.DARK) {
  body.classList.add(savedTheme);
} else {
  body.classList.add(Theme.LIGHT);
}

themeSwitchInput.checked = isSwitchInputChecked;

function onSwitchClick() {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  saveThemeLocalSt();
}

function saveThemeLocalSt() {
  localStorage.setItem('isSwitchChecked', 'true');

  if (body.classList.contains(Theme.LIGHT)) {
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('isSwitchChecked', 'false');
  }

  if (body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  }
}
