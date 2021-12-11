export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao) {
        this._inscritos = this._inscritos.filter(objFuncao => objFuncao !== funcao);
    }

    notificar() {
        this._inscritos.forEach(funcao =>  {
            funcao(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}