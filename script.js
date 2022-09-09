// pass css selector as param
function renderElements (string) {
  // get div container
  const container = document.querySelector(string);

  // get radio button rate
  const radioVal = getRate('rating');

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

  // add content to elements
  img.src = './images/illustration-thank-you.svg';
  img.ariaHidden = 'true';
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

function getRate(string) {
  // get form
  const rating = document.forms[string];

  // return radio value
  return rating.elements['rate'].value;
}

// element to be remove after submitting
const rating = document.forms.rating;

const btn = document.querySelector('input[type="submit"]');

btn.addEventListener('click', function() {
  renderElements('.container');
  rating.remove();
});

