import { useState } from 'react';
import GetPokemonsWithApi from './components/getPokemonsWithApi';
import SavePokemons from './components/savePokemon';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState("");
  const [savedPokemons, setSavedPokemons] = useState([]);

  const handleSave = (pokemon) => {
    setSavedPokemons([...savedPokemons, pokemon]);
  };

  const handleAllDelete = () => {
    setSavedPokemons([]);
  };

  const handleDelete = (pokemon) => {
    setSavedPokemons(savedPokemons.filter((el) => el !== pokemon));
  };

  return (
    <>
     <div>
       <section>
         <p>При нажатии получите рандомного покемона</p>
         <GetPokemonsWithApi 
         setCurrentPokemon={setCurrentPokemon} 
         onSave={handleSave}
         handleAllDelete={handleAllDelete}  
         />
       </section>
     </div>
     <div className='ourPokemons'>
     <b>
     ваши покемоны:
     </b>
     {savedPokemons.map((pokemon, index) => (
       <SavePokemons 
         key={index} 
         onDelete={handleDelete} 
         currentPokemon={pokemon} 
       />
     ))}
     </div>
    </>
  );
}

export default App;
