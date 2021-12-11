import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props) {
    super(props); // Precisa chamar porque extends Components
    this.categoria = "Sem categoria";
    this.titulo = "";
    this.descricaoNota = "";
    this.state = {categorias: []};
    this._refNovasCategorias = this._novasCategorias.bind(this); // Pegando a mesma referencia do objeto para aplicar no inscrever e desinscrever
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._refNovasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._refNovasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaNota(evento) {
    evento.stopPropagation();
    this.descricaoNota = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault(); // Não recarregar a pagina já que é um evento de submit
    evento.stopPropagation(); // Evitar a propagação do evento na área do HTML
    this.props.criarNota(this.categoria, this.titulo, this.descricaoNota);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select
          className="form-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
