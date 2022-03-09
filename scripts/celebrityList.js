import { celebrityData } from "./celebrityData.js";
import { cycleBgColor } from "./helper.js";

// inserts html for celebs
const celebritiesHTMLInsert = (obj, id) => {
  const celebrityTarget = document.querySelector(".celebrityList");
  celebrityTarget.innerHTML += `
  <div class = "singleCelebrity${cycleBgColor()} id=singleCelebrity_${id}" >
    <header class="name" id = "name_${id}">${obj.name}: ${obj.title}</header>
    <section class="bio" id = "bio_${id}"><img src="${
    obj.image
  }" alt="celebrity picture"> ${obj.bio}</section>
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

// when you click an element in celebrity list, put a border around that element's parent, focus the textbox and allow user to change ("currently selected element but should be only the bio"), when enter is pressed remove border and SHOULD remove event listner but currently does

let currentCelebID = 0;
document
  .querySelector(".celebrityList")
  .addEventListener("click", (celebClickEvent) => {
    document.getElementById(
      `${celebClickEvent.target.id}`
    ).parentElement.style.borderStyle = "dotted";
    console.log(celebClickEvent.target.id);
    const celebID = celebClickEvent.target.id;
    const splitID = celebID.split("_");
    document.getElementById("textInput").focus();
    document
      .querySelector("#textInput")
      .addEventListener("keyup", (keyupEvent) => {
        if (keyupEvent.keyCode !== 13) {
          let currentText = document.getElementById("textInput").value;
          document.getElementById(`bio_${splitID[1]}`).innerHTML = currentText;
        }
        if (keyupEvent.keyCode === 13) {
          document.getElementById("textInput").value = "";
          // document.getElementById(
          //   `${celebClickEvent.target.id}`
          // ).parentElement.style.borderStyle = "none";
        }
      });
  });
