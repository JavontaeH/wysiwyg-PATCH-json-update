import { celebrityData } from "./celebrityData.js";
import { cycleBgColor } from "./helper.js";

const celebritiesHTMLInsert = (obj) => {
  const celebrityTarget = document.querySelector(".celebrityList");
  celebrityTarget.innerHTML += `
  <div class = "singleCelebrity${cycleBgColor()}">
    <header class="name"><h1>${obj.name}: ${obj.title}</h1></header>
    <section class="bio"><h2>${obj.bio} <a href="${obj.image}"><img src="${
    obj.image
  }" alt="celebrity picture"></a></h2></section>
    <footer class="lifespan"><h3>${obj.lifespan.birth} - ${
    obj.lifespan.death
  }</h3></footer>
  </div>
  `;
};

export const buildCelebrities = (data) => {
  celebrityData.forEach((celebrity) => {
    celebritiesHTMLInsert(celebrity);
  });
};
