import logo from '../img/pokelogo.png'
const PokeDisplay = (props) => {

    const {list} = props;
    console.log(list.name)

    

    return(
        <div>
            <h2>Return a pokemon here</h2>
            <div className='poke-party'>
                {list.map((pokemon, index) => {
                    return(
                        <div id="cards" key={index}>
                            <img id='logo' src={logo} />
                            <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
                            <img id='pokemon' src={pokemon.sprites.front_default}/>
                            <p>Type: {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</p>
                        </div>
                        )
                })}
            </div>
        </div>
    )

}

export default PokeDisplay;