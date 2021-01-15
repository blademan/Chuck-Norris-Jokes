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
  console.log(data);
  blockquote.innerHTML = data.value;
  img.src = data.icon_url;
}
