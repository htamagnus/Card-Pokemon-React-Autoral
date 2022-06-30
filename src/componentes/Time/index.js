import CardPokemon from "../CardPokemon";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    props.pokemons.length > 0 && <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

      <div className="pokemons">
        {props.pokemons.map((pokemon) => (
          <CardPokemon corDeFundo={props.corPrimaria} key={pokemon.nome}
            nome={pokemon.nome}
            classe={pokemon.classe}
            imagem={pokemon.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
