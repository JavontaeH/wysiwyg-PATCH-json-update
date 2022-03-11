import { celebrityData } from "./celebrityData.js";
import { cycleBgColor } from "./helper.js";

// inserts html for celebs
const celebritiesHTMLInsert = (obj, id) => {
  const celebrityTarget = document.querySelector(".celebrityList");
  celebrityTarget.innerHTML += `
  <div class = "singleCelebrity${cycleBgColor()} id=singleCelebrity_${id}" >
    <header class="name" id = "name_${id}">${obj.name}: ${obj.title}</header>
    <section class="bio" id = "bioTotal_${id}"><img src="${
    obj.image
  }" alt="celebrity picture">
  <div class="bioText" id = "bio_${id}">${obj.bio}</div>
  </section>
    <footer class="lifespan" id = "lifespan_${id}">${obj.lifespan.birth} - ${
    obj.lifespan.death
  }</footer>
  </div>
  `;
};
// iterates data and inserts html element for every celeb and adds an id to all elements of that celeb
export const buildCelebrities = (data) => {
  let id = 1;
  celebrityData.forEach((celebrity) => {
    celebritiesHTMLInsert(celebrity, id);
    id++;
  });
};

// when you click an element in celebrity list, put a border around that element's parent, focus the textbox and allow user to change biography, need to seperate image section at some point...
let celebID;
let splitID;

document
  .querySelector(".celebrityList")
  .addEventListener("click", (celebClickEvent) => {
    celebID = celebClickEvent.target.id;
    splitID = celebID.split("_");
    document.getElementById(celebID).parentElement.style.borderStyle = "dotted";
    console.log(celebClickEvent.target.id);
    document.getElementById("textInput").focus();
  });

document.querySelector("#textInput").addEventListener("keyup", (keyupEvent) => {
  if (keyupEvent.keyCode !== 13) {
    let currentText = document.getElementById("textInput").value;
    document.getElementById(`bio_${splitID[1]}`).innerHTML = currentText;
  }
  if (keyupEvent.keyCode === 13) {
    document.getElementById("textInput").value = "";
    document.getElementById(celebID).parentElement.style.borderStyle = "none";
  }
});
