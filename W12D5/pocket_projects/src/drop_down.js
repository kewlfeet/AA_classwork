
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


const dogLinkCreator =  function(dogs) {

  const dogLinks = [];
  const dogNames = Object.keys(dogs);

  dogNames.forEach((dog) => {
    const anchor = document.createElement("a");
    anchor.innerHTML = dog;
    anchor.href = dogs[dog];

    const list = document.createElement("li");
    list.className = "dog-link";
    list.appendChild(anchor);
    dogLinks.push(list);
  }); 
  return dogLinks
};


const attachDogLinks = function() {
  const dogLinks = dogLinkCreator(dogs);
  const unorderdL = document.querySelectorAll(".drop-down-dog-list");
  Array.from(unorderdL).forEach((ul)=>{
    dogLinks.forEach((dog)=> {
      ul.appendChild(dog)
    })
  });
};

attachDogLinks();

const handleEnter = function() {
  const dogLinks = document.querySelectorAll(".dog-link");

  dogLinks.forEach( link => {
    // link.classList.add("open");
    link.className = link.className + ' open'
    // debugger;
  });
};

const handleLeave = function() {
  const dogLinks = document.querySelectorAll(".dog-link")

  dogLinks.forEach( link => {
    link.classList.remove("open");
  });
};

const dropNav = document.querySelector(".drop-down-dog-nav");

dropNav.addEventListener("mouseenter", handleEnter);
dropNav.addEventListener("mouseleave", handleLeave);