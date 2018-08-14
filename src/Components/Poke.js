import React from 'react'
import PropTypes from 'prop-types'


const Poke = ({ data, name }) => {
    const remainingPokemon = data.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
    console.log('------------ remainingPokemon', remainingPokemon)
    const POKEMON = remainingPokemon.map(pokemon => (<h2 key={pokemon.name}>{pokemon.name}</h2>))
    return <div>{POKEMON}</div>
}

// Check your prop types using this thing!!!
Poke.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string
}

export default Poke;