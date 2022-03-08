import { celebrityData } from "./celebrityData.js";

const celebritiesHTMLInsert = (obj) => {
  const celebrityTarget = document.querySelector(".celebrity");
  celebrityTarget.innerHTML += `<header class="name"><h1>${obj.name}: ${obj.title}</h1></header>
    <section class="bio"><h2>${obj.bio} <a href="${obj.image}"><img src="${obj.image} alt="celebrity picture"></a></h2></section>
    <footer class="lifespan"><h3>${obj.lifespan.birth} - ${obj.lifespan.death}</h3></footer>
  
  
  
  
  `;
  // const celebrityBioTarget = document.querySelector(".bio");
  // celebrityBioTarget.innerHTML += `<h2>${obj.bio} <a href="${obj.image}"><img src="${obj.image} alt="celebrity picture"></a></h2>`;
  // const celebrityLifespanTarget = document.querySelector(".lifespan");
  // celebrityLifespanTarget.innerHTML += `<h3>${obj.lifespan.birth} - ${obj.lifespan.death}</h3>`;
};

export const buildCelebrities = (data) => {
  celebrityData.forEach((celebrity) => {
    celebritiesHTMLInsert(celebrity);
  });
};

/*      <header class="name"></header>
        <section class="bio"></section>
        <footer class="lifespan"></footer>*/
