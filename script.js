const form = document.querySelector('#searchForm');
const searchContainer = document.querySelector('.searchResults');
let counter = 0;

const removeImg = () => {searchContainer.remove('img')}
const getRes = async (e) => {
  const searchTerm = form.elements.query.value;
  const config = { params: {q: searchTerm}}
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  displayImages(res.data)
  form.elements.query.value = '';
  counter += 1;
  console.log(res.data)
  console.log(counter)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  setTimeout(function() {
    getRes();
  }, 1000)
})



const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
        const img = document.createElement('img');
         img.src = result.show.image.medium;
         searchContainer.append(img)
    }
  }
}