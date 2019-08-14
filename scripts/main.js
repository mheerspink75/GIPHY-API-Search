const gifForm = document.querySelector("#gif-form");
gifForm.addEventListener("submit", fetchGiphs);

function fetchGiphs(e) {
  e.preventDefault();
  const searchTerm = document.querySelector(".search").value;
 
  fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=99&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`)
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
    output += `<a href="${imgData.images.original.url}"><img src="${imgData.images.original.url}" alt="${imgData.title}"></a>`;
  });
  
  document.querySelector(".results").innerHTML = output;
}