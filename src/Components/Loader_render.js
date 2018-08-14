import React from 'react'

const Loader_render = ({loaderImage, render, data, name}) => {
    const remainingPeople = data.filter(person => person.name.toLowerCase().includes(name.toLowerCase()))
    return (
        data.length ?
            render(remainingPeople)
        :
            <img src={loaderImage} alt="Loading..."/>
    )
}

export default Loader_render;