import React, { Component } from "react";
import axios from "axios";

import "./PokeDex.css";
import Pokecard from "./Pokecard";

export class PokeDex extends Component {
  state = {
    pokemons: [],
  };

  async componentDidMount() {
     const response = await axios
       .get("https://pokeapi.co/api/v2/pokemon-form/")
       .then((res) => {
         const json = res.data.results;
         this.setState({ pokemons: json });
          // console.log(res.data.results.length,'obj length')
        //  const pokemonImg = res.data.results
         
       })
       
       .catch((err) => {
         console.log(err);
       });
  }
  
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <div className="Pokedex-cards">
          {this.state.pokemons.map((pokemon,idx) => (
            <Pokecard key={idx} pokemon={pokemon} />
          ))}
        </div>
        ;
      </div>
    );
  }
}

export default PokeDex;

//  <div className="Pokedex-cards">
//    {this.state.pokemons.map((pokemon) => (
//      <Pokecard pokemon={pokemon} />
//    ))}
//  </div>;