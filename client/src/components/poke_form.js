import { useState } from 'react';

const PokeForm = (props) => {

    const { list, setList } = props
    const [pokeData, setPokeData] = useState({
        name: ""
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeData.name}`)
        const pokeResults = await results.json()
        console.log(pokeResults)
        setList([...list, pokeResults])
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Generate a Pokemon</h2>
            <div className="form-group">
                <label>Pokemon Name: </label>
                <input
                    type="text"
                    placeholder='Pick a pokemon!'
                    value={pokeData.name}
                    onChange={(e) => setPokeData({ ...pokeData, name: e.target.value })}
                />
                <input type="submit" value="Add" />
            </div>
        </form>
    )

}

export default PokeForm;