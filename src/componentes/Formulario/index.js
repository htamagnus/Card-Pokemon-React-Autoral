import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoPokemonCadastrado({
        nome,
        classe,
        imagem,
        time
    })
    setNome('')
    setClasse('')
    setImagem('')
    setTime('')

  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Pokemón</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Classe"
          placeholder="Digite a classe"
          valor={classe}
          aoAlterado={valor => setClasse(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Escolha a imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
            obrigatorio={true} 
            label="Categoria" 
            itens={props.times} 
            valor = {time}
            aoAlterado= {valor => setTime(valor)}
            />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
