import { useState } from 'react';

const PokeForm = (props) => {

    const { list, setList } = props
    const [pokeData, setPokeData] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeData}`)
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
                    value={pokeData}
                    onChange={(e) => setPokeData(e.target.value)}
                />
                <input type="submit" value="Add" />
            </div>
        </form>
    )

}

export default PokeForm;