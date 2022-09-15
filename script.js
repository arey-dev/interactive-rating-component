const submit = document.querySelector('input[type="button"]');
const wrappers = document.querySelectorAll('.value-wrapper');
const formContainer = document.querySelector('#form-container');
const stateContainer = document.querySelector('#state-container');
const radioContainer = document.querySelector('.radio-button-container');

radioContainer.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.className == 'radio-button-container' || event.target.tagName == 'li') return;

  // get div wrapper
  const wrapper = event.target;
  
  // get radio input
  const radio = wrapper.firstElementChild;

  handleChecked(wrapper, radio);
});

submit.addEventListener('click', function() {
  getRate();

  // remove form
  formContainer.style.display = 'none';

  // show 'thank you' state
  stateContainer.style.display = 'flex';
});

function getRate() {
  const form = document.forms.rating;
  const value = form.elements['rate'].value;
  const rateElem = document.querySelector('[data-rate-value]') 

  if(value) { 
    rateElem.textContent = value;
  } else {
    rateElem.parentElement.remove();
  }
}

function handleChecked(wrapper, radio) {
  // condition to undo selection
  if(radio.checked) {
    wrapper.classList.remove('checked');
    radio.checked = false;
    return; // return immediately after deselecting 
  }

  // clear styles for all value-wrappers first
  for(let wrapper of wrappers) {
    wrapper.classList.remove('checked');
  }

  if(!radio.checked) {
    wrapper.classList.add('checked');
    radio.checked = true;
  }
}