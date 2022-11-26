//const baseUrl = "http://localhost:3001/items";
const baseUrl =
  "https://my-json-server.typicode.com/nichole-s/se_project_react";
const headers = {
  "Content-Type": "application/json",
};

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItems = async () => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  });
  return handleServerResponse(res);
};

const addItem = async (name, imageUrl, weatherType) => {
  const body = { name: name, imageUrl: imageUrl, weather: weatherType };
  const res = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  return handleServerResponse(res);
};

const removeItem = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  return handleServerResponse(res);
};

export { getItems, addItem, removeItem };
