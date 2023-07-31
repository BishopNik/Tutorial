/** @format */

const checkbox = document.getElementById('yes');
const music = document.getElementById('myAudio');
const button = document.querySelector('.socset');
const STATUS_KEY = 'status';

checkbox.addEventListener('change', activeCheckbox);

const checked = localStorage.getItem(STATUS_KEY);
checked === 'false' ? (checkbox.checked = false) : (checkbox.checked = true);
activeCheckbox('open');

function activeCheckbox(status) {
	if (checkbox.checked) {
		button.style.display = 'block';
		status !== 'open' ? music.play() : undefined;
	} else {
		button.style.display = 'none';
		music.pause();
		music.currentTime = 0;
	}
	localStorage.setItem(STATUS_KEY, checkbox.checked);
}
