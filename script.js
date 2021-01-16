//////   HTML elements
const blockquote = document.querySelector('.blockquote');
const btn = document.querySelector('.btn');
const img = document.querySelector('img');
const jokeCategory = document.querySelector('.jokes-category');

//////// Listener functions
btn.addEventListener('click', getJokes);

////// Call functions
getJokes();
getCategory();

////////GET JOKE => Btn
async function getJokes() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const results = await fetch(
    'https://api.chucknorris.io/jokes/random',
    config
  );
  const data = await results.json();
  blockquote.innerHTML = data.value;
  img.src = data.icon_url;
  setBg();
}

//////////////GET RANDOM JOKE FROM CATEGORY LIST => Btn
async function getRandomJokes(random) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const results = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${random}`,
    config
  );
  const data = await results.json();
  blockquote.innerHTML = data.value;
  img.src = data.icon_url;
  setBg();
}

jokeCategory.addEventListener('click', function (event) {
  const target = event.target.innerText;

  getRandomJokes(target.toLowerCase());
});

//////////SET RANDOM BG
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
};

///////Get all category from API
async function getCategory() {
  const results = await fetch('https://api.chucknorris.io/jokes/categories');
  const category = await results.json();

  createCategory(category);
}

/////Create category list
function createCategory(category) {
  jokeCategory.innerHTML = '';
  category.forEach((item) => {
    const html = ` <button type="button" class="list-group-item list-group-item-action text-capitalize text-center list-group-item-warning ">
          ${item}
        </button>`;
    jokeCategory.insertAdjacentHTML('afterbegin', html);
  });
}
