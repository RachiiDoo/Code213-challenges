import React from "react";
import { useState } from "react";

const Characters = ({ character, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [img, setImg] = useState(character.img);

  const handleSave = () => {
    onUpdate(character.id, { id: character.id, name, description, img });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-2 items-center border shadow-lg rounded-md p-4">
      {!isEditing ? (
        <>
          <img className="w-1/3 mx-auto" src={img} alt="" />
          <h1 className="text-xl text-green-600 font-semibold">{name}</h1>
          <h1 className="text-lg font-semibold text-blue-600">{description}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-600 px-2 py-1 rounded-sm text-white"
            >
              Edit
            </button>
            <button
              onClick={() => {
                onDelete(character.id);
              }}
              className="bg-red-600 px-2 py-1 rounded-sm text-white"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="name"
            className="border p-2 rounded mt-2 w-full outline-none"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description"
            className="border p-2 rounded mt-2 w-full outline-none"
          />
          <input
            type="file"
            className="border p-2 mt-2 w-full"
            onChange={(e) => {
              setImg(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <button
            onClick={handleSave}
            className="px-2 py-1 bg-green-500 text-white font-semibold"
          >
            Save changes
          </button>
        </>
      )}
    </div>
  );
};

export default Characters;
