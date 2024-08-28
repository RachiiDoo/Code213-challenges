import React from "react";
import Characters from "./Components/Characters";
import { useState } from "react";

const App = () => {
  const initialCharacters = [
    { id: 1, name: 'Spongebob', description: 'A yellow sponge', img: '/public/images/SpongeBob.webp' },
    { id: 2, name: 'Patrick', description: 'A pink starfish', img: '/public/images/Patrick.webp' },
    { id: 3, name: 'Squidward', description: 'A grumpy squid', img: '/public/images/Squidward.webp' },
    { id: 4, name: 'Mr. Krabs', description: 'A money-loving crab', img: '/public/images/Krabs_artwork.webp' },
    { id: 5, name: 'Gary', description: 'A squirrel scientist', img: '/public/images/Gary.webp' },
    { id: 6, name: 'Plankton', description: 'A small green organism', img: '/public/images/Plankton.webp' }
  ];

  const [characters, setCharacters] = useState(initialCharacters);

  const deleteCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  }

  const updateCharacter = (id, updatedCharacter) => {
    setCharacters(characters.map(character => character.id === id ? updatedCharacter : character));
  }

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-3/4 h-fit p-4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      {characters.map((character) => (
        <Characters 
          key={character.id}
          character={character}
          onDelete={deleteCharacter}
          onUpdate={updateCharacter}
        />
      ))}
    </div>
  );
};

export default App;
