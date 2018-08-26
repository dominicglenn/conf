refreshFrequency: false,

fetchPhoto: () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Client-ID 3cf957fbb1a330ac4b8ed0f95435a4360013c8fcd5b8824b643c31e2191fbf20',
  };

  fetch(
    `https://api.unsplash.com/photos/random?featured=true&w=1440&h=900&orientation=landscape&count=1`,
    {
      headers,
    }
  ).then(res => res.json())
  .then(payload => {
    const url = payload[0].urls.custom;
    const img = document.querySelector('#img');
    img.src = url;

  });

},

render: function() {
  const time = 1000 * 60;
  setInterval(this.fetchPhoto, time);
  this.fetchPhoto();

  return `<img id="img" />`;

},

style: `
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: all .3s ease-in-out;
`
