import React from 'react'
import PropTypes from 'prop-types'


const Swapi = ({ data }) => {
    const PEOPLE = data.map(person => (<h2 key={person.name}>{person.name}</h2>))
    return <div>{PEOPLE}</div>
}

// Check your prop types using this thing!!!
Swapi.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string
}

export default Swapi;