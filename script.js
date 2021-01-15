const blockquote = document.querySelector('.blockquote');
const btn = document.querySelector('.btn');
const img = document.querySelector('img');

btn.addEventListener('click', getJokes);

getJokes();

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

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
};
