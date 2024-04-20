export default function SavePokemons({ currentPokemon, onDelete }) {

    const deletePokemon = () => {
        onDelete(currentPokemon);
    };

    return (
        <aside>
                {currentPokemon && (
                    <span>
                        {currentPokemon} <button className="deleteCurrent" onClick={deletePokemon}>X</button>
                    </span>
                )}
        </aside>
    );
}
