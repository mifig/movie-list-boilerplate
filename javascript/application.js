// -----------------
//  1. HTML + JS
// -----------------
const url = "http://www.omdbapi.com/?s=barbie&apikey=adf1f2d7"
const moviesContainer = document.getElementById("results")

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const movieCard = `<div class='col-3'>
        <div class="card">
          <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
          <div class="card-body">
            <h6 class="card-title">${movie.Title}</h6>
            <p class="card-text">${movie.Year}</p>
            <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
          </div>
        </div>
      </div>`

      moviesContainer.insertAdjacentHTML("beforeend", movieCard)
    })
  })

// -----------------
//  2. TEMPLATE
// -----------------
const url = "http://www.omdbapi.com/?s=barbie&apikey=adf1f2d7"
const moviesContainer = document.getElementById("results")
const template = document.getElementById("movieCardTemplate")

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const movieCard = template.content.cloneNode(true)

      movieCard.querySelector(".card-img-top").src = movie.Poster
      movieCard.querySelector(".card-title").innerText = movie.Title
      movieCard.querySelector(".card-text").innerText = movie.Year
      movieCard.querySelector(".btn").href = `https://www.imdb.com/title/${movie.imdbID}`

      moviesContainer.appendChild(movieCard)
    })
  })


// -----------------
//  3. MUSTACHE.JS
// -----------------
import Mustache from "mustachejs"

const url = "http://www.omdbapi.com/?s=barbie&apikey=adf1f2d7"
const moviesContainer = document.getElementById("results")
const template = document.getElementById("movieCardTemplate").innerHTML

fetch(url)
  .then(response => response.json())
  .then((data) => {
    const movieCards = Mustache.render(template, { movies: data.Search })
    moviesContainer.insertAdjacentHTML("beforeend", movieCards)
  })

// -----------------
//  4. VUE.JS
// -----------------
import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hello from Vue.JS"
    }
  }
}).mount('#results') 