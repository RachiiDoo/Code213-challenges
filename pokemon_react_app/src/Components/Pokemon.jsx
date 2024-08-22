import React from "react";

const Pokemon = () => {
  const pokeArray = [
    {
      name: "Bulbasaur",
      type: "Grass, Poison",
      imageSrc: "/public/images/001.png",
    },
    {
      name: "Ivyasaur",
      type: "Grass, Poison",
      imageSrc: "/public/images/002.png",
    },
    {
      name: "Venusaur",
      type: "Grass, Poison",
      imageSrc: "/public/images/003.png",
    },
    {
      name: "Charmander",
      type: "Fire",
      imageSrc: "/public/images/004.png",
    },
    {
      name: "Charmeleon",
      type: "Fire",
      imageSrc: "/public/images/005.png",
    },
    {
      name: "Charizard",
      type: "Fire, Flying",
      imageSrc: "/public/images/006.png",
    },
    {
      name: "Squirtle",
      type: "Water",
      imageSrc: "/public/images/007.png",
    },
    {
      name: "Wartortle",
      type: "Water",
      imageSrc: "/public/images/008.png",
    },
    {
      name: "Blastoise",
      type: "Water",
      imageSrc: "/public/images/009.png",
    },
    {
      name: "Caterpie",
      type: "Pug",
      imageSrc: "/public/images/010.png",
    },
    {
      name: "Metapod",
      type: "Pug",
      imageSrc: "/public/images/011.png",
    },
    {
      name: "Butterfree",
      type: "Pug, Flying",
      imageSrc: "/public/images/012.png",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-fit p-12">
        {pokeArray.map((pokemon, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-lg bg-gray-300 p-4 object-fit"
          >
            <img src={pokemon.imageSrc} alt="" />
            <h1 className="text-xl text-blue-700 font-semibold">
              Name : {pokemon.name}
            </h1>
            <h1 className="text-xl text-green-700 font-semibold">
              Type : {pokemon.type}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
