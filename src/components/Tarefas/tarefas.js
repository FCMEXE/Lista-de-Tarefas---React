import React from "react";

// importar  os componentes para fazer as Tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./tarefas.css";
import PropTypes from "prop-types";

// Passar no Render no Main, necessita ser uma Função
export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefas, index) => (
        // Passar uma .key para cada tarefa ser unica
        <li key={tarefas}>
          {tarefas}

          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

//passar as Funçoes e string do Tarefas para o Main
Tarefas.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
