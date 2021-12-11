import React, { Component } from "react";
import "./estilo.css";
// import deleteSvg from "../../assets/img/delete.svg"; // Importação em forma de imagem
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"; // Importação em forma de SVG Obs.: Nome do component criado deve ser maiúsculo, senão ele não entende

class CardNota extends Component {

  _apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this._apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.conteudoNota}</p>
      </section>
    );
  }
}

export default CardNota;
