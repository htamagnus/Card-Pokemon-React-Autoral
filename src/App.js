import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Attacker',
      corPrimaria: '#0C51A6',
      corSecundaria: '#396bc8d0'
    },
    {
      nome: 'Defender',
      corPrimaria: '#FFD650',
      corSecundaria: '#FFEFB9'
    },
    {
      nome: 'Supporter',
      corPrimaria: '#0C51A6',
      corSecundaria: '#396bc8d0'
    },
    {
      nome: 'Speedster',
      corPrimaria: '#FFD650',
      corSecundaria: '#FFEFB9'
    },
    {
      nome: 'All-Rounder',
      corPrimaria: '#0C51A6',
      corSecundaria: '#396bc8d0'
    }
  ]

  const [pokemons, setPokemons] = useState([])

  const aoNovoPokemonAdicionado = (pokemon) => {
    setPokemons([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}
      aoPokemonCadastrado={pokemon => aoNovoPokemonAdicionado(pokemon)} />
      
      {times.map(time => 
      <Time key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      pokemons={pokemons.filter(pokemon => pokemon.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
