const btn = document.getElementById('load_apod');
const img = document.getElementById('apodImage');
const title = document.getElementById('apod_title');
const explain = document.getElementById('apod_explanation');

btn.addEventListener('click', function() {
  fetch("http://localhost:8080/astro")
    .then(response => response.json())
    .then(data => {
      img.src = data.url;
      title.innerText = data.title;
      explain.innerText = data.explanation;
    })
    .catch(error => console.error('Error fetching APOD:', error));
});
