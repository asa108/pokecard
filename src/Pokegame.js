import React, { Component } from "react";

export class Pokegame extends Component {
  state = {
    pokemons: [
      { id: 4, name: "pokachu", type: "sdfd", exp: 22 },
      { id: 55, name: "adsfg", type: "df", exp: 76 },
      { id: 12, name: "hgfd", type: "sd", exp: 22342 },
      { id: 765, name: "erw", type: "fire", exp: 2232 },
      { id: 42, name: "345y", type: "fire", exp: 22 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.rendom() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    console.log(hand1);
    console.log(hand2);

    return <div></div>;
  }
}

export default Pokegame;
