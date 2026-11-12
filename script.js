const movieTitles = [
  'Космическая станция',
  'Тайна старого дома',
  'Поезд на север',
];
const moviePosters = [
  'covers/space.jpg',
  'covers/house.jpg',
  'covers/train.jpg',
];
const movieList = document.getElementById('movieList');
const addMovie = document.getElementById('addMovie')
const movieName = document.getElementById('movieName')
const moviePoster = document.getElementById('moviePoster')

function renderMovies() {
  movieList.innerHTML = '';

  movieTitles.forEach((movieTitle, index) => {
    const item = document.createElement('li');

    const poster = document.createElement('img');
    poster.src = moviePosters[index];
    poster.alt = '';
    poster.width = 64;
    poster.height = 40;

    const title = document.createElement('span');
    title.textContent = movieTitle;

    const delet3 = document.createElement('button')
    delet3.textContent = 'Удалить'
    delet3.addEventListener('click', () => {
      movieTitles.splice(index, 1)
      moviePosters.splice(index, 1)

      renderMovies()
    })

    item.append(poster, title, delet3);
    movieList.append(item);
  });
}

addMovie.addEventListener('click', () => {
  movieTitles.push(movieName.value)
  moviePosters.push(moviePoster.value)

  renderMovies()
})

renderMovies();