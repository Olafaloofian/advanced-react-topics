import React, { Component } from 'react';
import logo from './PokeStar.png';
import './App.css';
import axios from 'axios'
import Swapi from './Components/Swapi'
import Poke from './Components/Poke'
import Carousel from './Components/ChildProps'
import LoaderRP from './Components/Loader_render' // Render Prop
import withLoader from './Components/Loader_HOC' // Loader Prop - Higher Order


// Running our HOC on children components
let SwapiWithLoader = withLoader(Swapi)
let PokeWithLoader = withLoader(Poke)

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemon: [],
      swapi: [],
      swapiInput: '',
      pokeInput: ''
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
    .then(({ data: {results: swapi}}) => { // Super destructuring - 'response: {data: {results: swapi}}' is equivalent to 'let swapi = response.data.results'
      console.log('------------ swapi', swapi)
      setTimeout(() => {
        this.setState({ swapi })
      }, 4000)
    }).catch(error => console.log('---------- error', error))

    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(({ data: {results: pokemon}}) => { // Super destructuring - 'response: {data: {results: pokemon}}' === 'let pokemon = response.data.results'
      setTimeout(() => {
        this.setState({ pokemon })
      }, 2000)
    }).catch(error => console.log('---------- error', error))
  }

  handleChange = ({target: {name, value}}) => { // This is the same as e.target.value and e.target.name, just destructured!
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log('------------ this.state', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PokeWars</h1>
        </header>
        {/* This is how to make a modular input line handleChange function. Make sure to give the input a 'name' property! */}
        <input name='swapiInput' onChange={this.handleChange} value={this.state.swapiInput} type="text" placeholder='Search Star Wars Character'/>
        <LoaderRP 
          data={this.state.swapi}
          name={this.state.swapiInput}
          loaderImage='https://cdn.dribbble.com/users/384407/screenshots/2409144/starwars-loader.gif'
          // This needs to be a function becasue it is a function in the loader component. Return the component you want to render, passing it the necessary props.
          render={(props) => <Swapi data={props}/>}
          />
        <input name='pokeInput' onChange={this.handleChange} value={this.state.pokeInput} type="text" placeholder='Search Pokemon'/>
        {/* <LoaderRP 
          loading={this.state.pokemon.length}
          loaderImage='https://cdn.dribbble.com/users/384407/screenshots/2409144/starwars-loader.gif'
          render={props => <Poke data={this.state.pokemon} name={this.state.pokeInput}/>}
          /> */}
          {/* HOC method below: */}
        <PokeWithLoader data={this.state.pokemon} name={this.state.pokeInput} loadingImage='https://cdn.dribbble.com/users/384407/screenshots/2409144/starwars-loader.gif'/>
        {/* <SwapiWithLoader data={this.state.swapi} name={this.state.swapiInput} loadingImage='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'/> */}
        <Carousel>
          <img src="https://nerdist.com/wp-content/uploads/2017/12/bulbasaur-charmander-squirtle-pokemon.jpg" width='500' alt=""/>
          <img src="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/5b5a262b70a6ada29bd9a24a/1532721657839/the-crew-of-star-wars-episode-ix-seem-to-be-using-old-school-phones-on-set-to-prevent-leaks-social.jpg?format=1000w" width='500' alt=""/>
          <img src="https://assets1.ignimgs.com/2018/07/13/gen4-1531453048844_400w.jpg" width='500' alt=""/>
          <img src="https://cnet2.cbsistatic.com/img/DzpspuGkVlFi2aKm0PGVFZ-Q7bs=/724x407/2017/08/31/4be3c3e9-9a9e-4f10-b269-f214887ceb09/lego-star-wars-ultimate-millennium-falcon-010.jpg" alt="" width='500'/>
        </Carousel>
      </div>
    );
  }
}

export default App;
