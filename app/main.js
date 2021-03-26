
window.onload = function () {

    let apiKey = 'VEZ87dcYzhtuU5c2gTHxFOrAOu4hUknq'; //añade aquí tu apikey
    let query = 'looney toones'; //lo que quieras buscar
    let limit = '100'; // el número de resultados que necesitas
    let resource = 'gifs'; //gifs - stickers
    
    fetch(`https://api.giphy.com/v1/${resource}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`)
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log(data.data);
      let caja = document.getElementById("container");     
  
      data.data.forEach(function(cat, index) {
        let item = `<div class="box"><h2>${cat.title}</h2>
            <img class="pic" src="${cat.images.original.url}" alt="${cat.title}">
          </div>`;
        caja.innerHTML += item;
      });
    })


}