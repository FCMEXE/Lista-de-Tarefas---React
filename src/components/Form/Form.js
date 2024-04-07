import React from "react";

// importa os icons e propType
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

//importa o Form.css
import "./Form.css";

// Função para renderizar o form na pagina
export default function Form({ handleChance, handleSubmit, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input onChange={handleChance} type="text" value={novaTarefa} />
      <button type="submit">
        {/* icon */}
        <FaPlus />
      </button>
    </form>
  );
}

// Prop para passar as funções e strings do Form pra Main
Form.propTypes = {
  handleChance: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
