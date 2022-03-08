import { celebrityData } from "./celebrityData.js";
import { cycleBgColor } from "./helper.js";

const celebritiesHTMLInsert = (obj) => {
  const celebrityTarget = document.querySelector(".celebrityList");
  celebrityTarget.innerHTML += `
  <div class = "singleCelebrity${cycleBgColor()}" >
    <header class="name" id = "name">${obj.name}: ${obj.title}</header>
    <section class="bio" id = "bio"><img src="${
      obj.image
    }" alt="celebrity picture"> ${obj.bio}</section>
    <footer class="lifespan" id = "lifespan">${obj.lifespan.birth} - ${
    obj.lifespan.death
  }</footer>
  </div>
  `;
};

export const buildCelebrities = (data) => {
  celebrityData.forEach((celebrity) => {
    celebritiesHTMLInsert(celebrity);
  });
};

document
  .querySelector(".celebrityList")
  .addEventListener("click", (celebClickEvent) => {
    console.log(celebClickEvent.target.id);
    document.getElementById(`${celebClickEvent.target.id}`).style.borderStyle =
      "dotted";
  });
