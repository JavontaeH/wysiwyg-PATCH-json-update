import { celebrityData } from "./celebrityData.js";

const celebritiesHTMLInsert = (obj) => {
  const celebrityNameTarget = document.querySelector(".name");
  celebrityNameTarget.innerHTML += `<h1>${obj.name}: ${obj.title}</h1>`;
  const celebrityBioTarget = document.querySelector(".bio");
  celebrityBioTarget.innerHTML += `<h2>${obj.bio} <a href="${obj.image}"><img src="${obj.image} alt="celebrity picture"></a></h2>`;
  const celebrityLifespanTarget = document.querySelector(".lifespan");
  celebrityLifespanTarget.innerHTML += `<h3>${obj.lifespan.birth} - ${obj.lifespan.death}</h3>`;
};

export const buildCelebrities = (arr) => {
  celebrityData.forEach((celebrity) => {
    celebritiesHTMLInsert(celebrity);
  });
};
