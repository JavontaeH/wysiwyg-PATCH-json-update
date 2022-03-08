import { celebrityData } from "./celebrityData.js";
import { cycleBgColor } from "./helper.js";

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

export const buildCelebrities = (data) => {
  let id = 1;
  celebrityData.forEach((celebrity) => {
    celebritiesHTMLInsert(celebrity, id);
    id++;
  });
};

document
  .querySelector(".celebrityList")
  .addEventListener("click", (celebClickEvent) => {
    console.log(celebClickEvent.target.id);
    document.getElementById(`${celebClickEvent.target.id}`).style.borderStyle =
      "dotted";
    document.getElementById("textInput").focus();
    document
      .querySelector("#textInput")
      .addEventListener("keypress", (enterPressEvent) => {
        let currentText = document.getElementById("textInput").value;
        console.log(document.getElementById("textInput").value);
        document.getElementById(`${celebClickEvent.target.id}`).innerHTML =
          currentText;
        if (enterPressEvent.charCode === 13) {
          document.getElementById("textInput").innerHTML = "";
        }
      });
  });
