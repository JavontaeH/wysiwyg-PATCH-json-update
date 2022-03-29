export const getCelebrities = () => {
  return fetch(`http://localhost:8088/celebrities`).then((response) =>
    response.json()
  );
};

export const updateCeleb = (Obj) => {
  return fetch(`http://localhost:8088/celebrities/${Obj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Obj),
  }).then((response) => response.json());
};
