import { useEffect, useState } from "react";
import axios from "axios";

export default function GetPokemonsWithApi({ setCurrentPokemon, onSave , handleAllDelete }) {
  const [isPokemons, setIsPokemons] = useState([]);
  const [nowPokemon, setNowPokemon] = useState("..");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const pokemons = response.data.results.map(pokemon => pokemon.name);
        setIsPokemons(pokemons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * isPokemons.length);
    setNowPokemon(isPokemons[randomIndex]);
    setCurrentPokemon(isPokemons[randomIndex]);
  };

  const deleteBtn = () => {
    setNowPokemon("...");
    setCurrentPokemon("");
  };

  const saveBtn = () => {
    if (nowPokemon === "..." || nowPokemon === "..") {
      alert("Покемона нету!")
    }
    else{
      onSave(nowPokemon);
      setNowPokemon("...")
    }
  };

  const deleteAllPokemon = () => {
    handleAllDelete();
  };

  return (
    <>
      <button onClick={randomNumber}>Получить рандомного покемона</button>
      <p>Ваш покемон: <b>{nowPokemon}</b></p>
      <br />
      <div>
        <button className="saveBtn" onClick={saveBtn}>Сохранить</button>
        <button className="deleteBtn" onClick={deleteBtn}>Удалить</button>
        <button className="deleteAll" onClick={deleteAllPokemon}>Удалить всех</button>
      </div>
    </>
  );
}
