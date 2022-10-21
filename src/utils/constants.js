const secretKey = "cf759c55f9244983ab9140125222509";

const apiKey = "989a928ab9bf3110a6a6a0e73d27594f";

const location = { latitude: "45.123630", longitude: "-92.675880" };

const weatherConditions = {
  sunday: "/sunday.svg",
  cloudday: "/cloudday.svg",
  rainday: "/rainday.svg",
  stormday: "/stormday.svg",
  snowday: "/snowday.svg",
  fogday: "/fogday.svg",
  sunnight: "/sunnight.svg",
  cloudnight: "/cloudnight.svg",
  rainnight: "/rainnight.svg",
  stormnight: "/storm_night.svg",
  snownight: "/snow_night.svg",
  fognight: "/fognight.svg",
};

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    //link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/cap.jpg?etag=cf33d6ac81f0613c13a5c403fc7c62da",
    link: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    //link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/hoodie.jpg?etag=1f3d3c1a154f7a9e07bd78a8f6952d9e",
    link: "https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    //link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/jacket.jpg?etag=e2e17fc1352115d2e59511b380fccae9",
    link: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    //link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/sneakers.jpg?etag=56322fb0e0f745439c1d344c253c6855",
    link: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    //link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/t-shirt.jpg?etag=0f94f1c569bd19d95860902fcc5c70b3",
    link: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    //link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/winter-coat.jpg?etag=2a959245bf5291c50cdbd4fcefb25a21",
    link: "https://images.unsplash.com/photo-1517789668834-2836d6a20899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

export { secretKey, apiKey, location, weatherConditions, defaultClothingItems };
