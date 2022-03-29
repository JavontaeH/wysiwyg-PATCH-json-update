import { getCelebrities, updateCeleb } from "./dataManager.js";
import { cycleBgColor } from "./helper.js";

// inserts html for celebs
const celebritiesHTMLInsert = (obj) => {
  const celebrityTarget = document.querySelector(".celebrityList");
  celebrityTarget.innerHTML += `
  <div class = "singleCelebrity${cycleBgColor()} id=singleCelebrity_${obj.id}" >
    <header class="name" id = "name_${obj.id}">${obj.name}: ${
    obj.title
  }</header>
    <section class="bio" id = "bioTotal_${obj.id}"><img src="${
    obj.image
  }" alt="celebrity picture">
  <div class="bioText" id = "bio_${obj.id}">${obj.bio}</div>
  </section>
    <footer class="lifespan" id = "lifespan_${obj.id}">${
    obj.lifespan.birth
  } - ${obj.lifespan.death}</footer>
  </div>
  `;
};
// iterates data and inserts html element for every celeb and adds an id to all elements of that celeb
export const buildCelebrities = () => {
  getCelebrities().then((allCelebs) => {
    allCelebs.forEach((celebrity) => {
      celebritiesHTMLInsert(celebrity);
    });
  });
};

// when you click an element in celebrity list, put a border around that element's parent, focus the textbox and allow user to change biography, need to seperate image section at some point...
let celebID;
let splitID;

document
  .querySelector(".celebrityList")
  .addEventListener("click", (celebClickEvent) => {
    if (celebID) {
      document.getElementById(celebID).parentElement.style.borderStyle = "none";
    }
    celebID = celebClickEvent.target.id;
    splitID = celebID.split("_");
    document.getElementById(celebID).parentElement.style.borderStyle = "dotted";
    document.getElementById("textInput").focus();
  });

document.querySelector("#textInput").addEventListener("keyup", (keyupEvent) => {
  if (keyupEvent.keyCode !== 13) {
    let currentText = document.getElementById("textInput").value;
    document.getElementById(`bio_${splitID[1]}`).innerHTML = currentText;
  }
  if (keyupEvent.keyCode === 13) {
    const celebNewBio = document.getElementById("textInput").value;
    document.getElementById("textInput").value = "";
    document.getElementById(celebID).parentElement.style.borderStyle = "none";
    const celebObj = {
      bio: celebNewBio,
      id: splitID[1],
    };

    updateCeleb(celebObj).then(() => {
      buildCelebrities();
    });
  }
});
