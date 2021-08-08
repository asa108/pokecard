import axios from "axios";
import React, { Component } from "react";
import "./Pokecard.css";

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export class Pokecard extends Component {
  static defaultProps = {
    defaultUrl: "https://pokeapi.co/api/v2/pokemon-form/13/",
  };
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: [],
      imgSrc: '',
      types: [],
      type:''
    };
  }

  async componentDidMount() {
   for (let i = 0; i < 20; i++) {
     await axios.get(this.props.pokemon.url).then((res) => {
        const data = res.data.sprites.front_default;
       this.state.imgUrl.push(this.setState({ imgSrc: data }));
       const imgData = res.data.types[0].type.name
        this.state.types.push(this.setState({ type: imgData }));
      });
    }
  }


  render() {
    const { name } = this.props.pokemon;
    
    // let imgSrc = `${POKE_API}${id}.png`;

    // let imgSrc = `${url}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img style={{ width: "200px" }} src={this.state.imgSrc} alt={name} />
        <div className="Pokecard-data">Type : {this.state.type}</div>
      </div>
    );
  }
}

export default Pokecard;
