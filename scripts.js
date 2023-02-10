const movies = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" }
]

let searchBtn = document.getElementById('search-Btn')
let title = document.getElementById('title')
let genre = document.getElementById('genre')
let resultSpace = document.getElementById('result-space')
let titleSort = document.getElementById('title-sort')
let genreSort = document.getElementById('genre-sort')
let genreCount = document.getElementById('genre-count')
let errorMsg = document.getElementById('error-msg')
let result = []

resultSpace.innerHTML = ""



searchBtn.addEventListener('click', function (event) {
  if (title.value) {
    errorMsg.textContent = ''
    resultSpace.innerHTML = ""
    result = searchByTitle(title.value)
  }
  else if (genre.value) {
    resultSpace.innerHTML = ""
    errorMsg.textContent = ''
    result = searchByGenre(genre.value)
  }
  displayResult(result)
})



titleSort.addEventListener('click',function(){
  let sortedList = result.sort((a,b)=> a.title.localeCompare(b.title))
  displayResult(sortedList)
})


genreSort.addEventListener('click',function(){
  let sortedList = result.sort((a,b)=> a.genre.localeCompare(b.genre))
  displayResult(sortedList)
})



//function to display the result
function displayResult(result){
  genreCount.innerHTML = ""
  resultSpace.innerHTML = ""
  if(result.length == 0){
    errorMsg.textContent = 'Sorry! Not Avaialble'
    genreCount.innerHTML = ""
    resultSpace.innerHTML = ""
  }
  
  else{
    result.map(movie => {
      let item = `<li> ${movie.title}(${movie.genre})</li>`
      resultSpace.innerHTML = resultSpace.innerHTML + item
      
    })
  }
  countByGenre(result)
  result = []
}



//function will return movies by title
function searchByTitle(selection) {
  let requiredList = movies.filter(movie => movie.title.toLowerCase().includes(selection.toLowerCase().trim()))
  return requiredList
}


//function will return movies by genere
function searchByGenre(selection) {
  let requiredList = movies.filter(movie => movie.genre.toLowerCase().includes(selection.toLowerCase().trim()))
  return requiredList
}


//function to display the count by the genre
function countByGenre(arr){
  let map = new Map()
  for(let i=0;i<arr.length;i++){
    if(map.has(arr[i].genre)){
      map.set(arr[i].genre,map.get(arr[i].genre)+1)
    }else{
      map.set(arr[i].genre, 1)
    }
  }
  console.log(map)
  for(let entry of map){
    genreCount.innerHTML = genreCount.innerHTML + `<li>${entry[0]} : ${entry[1]}</li>`
  }
}



