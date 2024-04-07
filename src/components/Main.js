import React, { Component } from "react";

// Importa os documentos para montar a pag
import Form from "./Form/Form";
import Tarefas from "./Tarefas/tarefas";
import "./Main.css";

// cria os estados  para a função de adicionar tarefa e limpar o campo
export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  // guarda as tarefas na lista de tarefas
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.setState;

    if (tarefas === prevState.tarefas) return;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  // envia as terefas para a lista de tarefas
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefas];

    // limpa o visor quando enviar uma tarefa e atualiza a lista de tarefas
    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  // adiciona um índice às tarefas clicadas
  handleChance = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  // edita as tarefas da lista de tarefas
  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // remove a tarefa da lista de tarefas
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // renderiza na tela
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Nova Tarefa</h1>

        <Form // chama a classe Form
          // chama as funçoes e const do Form
          handleSubmit={this.handleSubmit}
          handleChance={this.handleChance}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
