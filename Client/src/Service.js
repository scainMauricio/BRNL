//### LINK BACKEND  ###

const baseURL = "http://localhost:3001/";

//GET ALL

export const getAll = async () => {
  try {
    const result = await fetch(baseURL);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

//POST ONE

export const postOne = async (product) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };
  try {
    const result = await fetch(baseURL, options);
    return result.json();
  } catch (error) {
    console.log(error);
  }
};

//by id

export const getById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/brand/${id}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
