//Working JavaScript Code

const gifForm = document.querySelector("#gif-form");
gifForm.addEventListener("submit", fetchGiphs);

function fetchGiphs(e) {
  e.preventDefault();
  const searchTerm = document.querySelector(".search").value;

  fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=80&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`)
    .then(response => {
      return response.json();
    })
    .then(resp => {
      console.log(resp);
      let dataArray = resp.data;
      showGiphs(dataArray);
    })
    .catch(err => console.log(err));
}

function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = '<div class="results">';

  dataArray.forEach(imgData => {
    output += `<a href="${imgData.images.original.url}" alt="${imgData.title}" target="_blank"><img src="${imgData.images.original.url}"></a>`;

  });

  document.querySelector(".results").innerHTML = output;
}


//Working jQuery Code
//The top jQuery Code is working
/*
const gifForm = $("#gif-form");
gifForm.submit(e => {
  e.preventDefault();
  const searchTerm = $('.search').val();
  const url = `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=80&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;

  $.get(url)
    .done(resp => {
      showGiphys(resp.data.slice(0, 80));
    }).fail(console.log);
});
*/
//This jQuery Code is not working
/*
function showGiphys(dataArray) {
  const resultBody = dataArray
    .map(imgData => `<a href="${imgData.images.original.url}" alt="${imgData.title}" target="_blank"><img src="${imgData.images.original.url}"></a>`)
    .join('');
  $(".results").innerHTML = `<div class="results">${resultBody}</div>`;
}
*/


