function renderState () {
  // get div container
  const container = document.querySelector('.container');
  container.classList.toggle('card');

  // get radio button value
  const radioVal = getRate();

  const div = document.createElement('div');
  div.className = 'img-wrapper';
  
  const img = document.createElement('img');
  img.src = './images/illustration-thank-you.svg';
  img.ariaHidden = 'true';
  div.append(img);
  container.append(div);
  
  
  const p_highlight = document.createElement('p');
  p_highlight.className = 'highlight';

  // if user the user picked a rate, show rate
  if(radioVal) {
    p_highlight.textContent = 'You selected ' + radioVal + ' out of 5';
    container.append(p_highlight);
  }
  
  const p_heading = document.createElement('p');
  p_heading.className = 'heading';
  p_heading.textContent = 'Thank you!';
  container.append(p_heading);
  
  const p_message = document.createElement('p');
  p_message.textContent = "We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch!";
  container.append(p_message);
}

function getRate() {
  // get form
  const rating = document.forms.rating;

  // return radio value
  return rating.elements['rate'].value;
}

const wrappers = document.querySelectorAll('.value-wrapper');
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

const radioDiv = document.querySelector('.radio-button-container');
radioDiv.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.className == 'radio-button-container' || event.target.tagName == 'li') return;

  // get div wrapper
  const wrapper = event.target;
  
  // get radio input
  const radio = wrapper.firstElementChild;

  handleChecked(wrapper, radio);
});

const submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click', function() {
  // render 'thank you' card
  renderState();
  
  // remove form
  const rating = document.forms.rating;
  rating.remove();
});

