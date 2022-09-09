function renderElements () {
  // get div container
  const container = document.querySelector('.container');

  // get radio button value
  const radioVal = getRate();

  // create elements for thank you card
  const div = document.createElement('div');
  const img = document.createElement('img');
  const p_highlight = document.createElement('p');
  const p_heading = document.createElement('p');
  const p_message = document.createElement('p');

  // add classes;
  container.classList.toggle('card');
  div.className = 'img-wrapper';
  p_highlight.className = 'highlight';
  p_heading.className = 'heading';

  //add attributes
  img.src = './images/illustration-thank-you.svg';
  img.ariaHidden = 'true';

  // add content to elements
  p_highlight.textContent = 'You selected ' + radioVal + ' out of 5';
  p_heading.textContent = 'Thank you!';
  p_message.textContent = "We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch!";

  // append elements
  div.append(img);
  container.append(div);
  container.append(p_highlight);
  container.append(p_heading);
  container.append(p_message);
}

function handleChecked(wrapper, input) {
  if(input.checked) {
    wrapper.classList.remove('checked');
    input.checked = false;
    return;
  }
  // clear checks
  for(let wrapper of wrappers) {
    wrapper.classList.remove('checked');
  }

  if(!input.checked) {
    wrapper.classList.add('checked');
    input.checked = true;
  }
}

function getRate() {
  // get form
  const rating = document.forms['rating'];

  // return radio value
  return rating.elements['rate'].value;
}

const wrappers = document.querySelectorAll('.value-wrapper');
const radioDiv = document.querySelector('.radio-button-container');
const btn = document.querySelector('input[type="submit"]');


btn.addEventListener('click', function() {
  // render 'thank you' card
  renderElements();
  
  // remove form
  const rating = document.forms.rating;
  rating.remove();
});

radioDiv.addEventListener('click', function(event) {
  if (event.target.className == 'radio-button-container' || event.target.tagName == 'LABEL') return;

  // get div wrapper
  const wrapper = event.target;

  // get input
  const input = wrapper.previousElementSibling;
  handleChecked(wrapper, input);

  event.preventDefault();
});

