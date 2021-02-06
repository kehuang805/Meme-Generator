document.addEventListener("DOMContentLoaded", function(){
    let container = document.querySelector(".container-fluid");
    document.querySelector("form").addEventListener("submit", formSubmit)
});

function formSubmit(event){
    event.preventDefault();
    let newMeme = document.createElement("span");
    let form = document.querySelector("form");
    let imageUrl = form.elements["url"].value;
    let topText = form.elements["topText"].value;
    let topTextP = document.createElement("p");
    topTextP.classList.add("top","col-10");
    topTextP.innerText = topText;
    let bottomText = form.elements["bottomText"].value;
    let bottomTextP = document.createElement("p");
    bottomTextP.classList.add("bottom","col-10");
    bottomTextP.innerText = bottomText;
    newMeme.classList.add("col-5", "mx-2", "mb-5", "meme", "d-flex" ,"justify-content-center");
    let memeImage = document.createElement("div");
    memeImage.classList.add("memeImage");
    memeImage.innerHTML = "<img src ='" +imageUrl + "'>";
    let imageOverlay = document.createElement("div");
    imageOverlay.classList.add("overlay");
    imageOverlay.innerHTML = "<img src='http://clipart-library.com/images/8cAEeqMca.png'>";
    memeImage.appendChild(imageOverlay);
    newMeme.appendChild(topTextP);
    newMeme.appendChild(bottomTextP);
    newMeme.appendChild(memeImage)
    newMeme.addEventListener("click", function(){
      document.querySelector(".memeSpace").removeChild(this);
    })
    document.querySelector(".memeSpace").appendChild(newMeme);
    form.reset();
}