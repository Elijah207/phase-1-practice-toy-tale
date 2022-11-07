let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function renderToys(data) {
  for(const element of data ) {
    const toyCollection  = document.querySelector("#toy-collection");
    const toy = document.createElement("div");
    const toyName = docuement.createElement("h2");
    const toyImg = document.createAttribute("img");
    const toyLikes = document.createAttribute("p");
    const button = document.createElement("button")

    toyName.textContent = element.name;
    toyImg.src = element.image;
    toyImg.classList.add("toy-avatar");
    toyLikes.textContent = element.likes;
    button.textContent = "like image.png";
    button.classList.add("like-btn");
    button.setAttribute("id", element.id);
    
    
    toy.classList.add("card");
    toyCollection.appendChild(toy);
    toy.append(toyName, toyImg, toyLikkes, button);


}

function renderToy(data) {
  for(const element of data ) {

const toyForm = document.querySelector(".add-toy-form");

toyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToy = {
    name: e.target.name.value,
    image: e.target.image.value,
  }
  fetch("https://localhost:3000/toy")
  method: "POST"
  headers: {
    "Content-Type"; "application/json",
    Accept; "application/json"
  body: JSON.stringify(newToy)
  })
  .then((response) => response.json())

    console.log(newToy)
  }

  


fetch("http:localhost:300/toys")
  .then(function (response) {
    return response.json ()})
  .then(function (data0) {
    console.log(data)
    renderToys(data);
  })