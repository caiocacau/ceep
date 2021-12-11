export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao) {
        this._inscritos = this._inscritos.filter(objFuncao => objFuncao !== funcao);
    }

    notificar() {
        this._inscritos.forEach(func =>  {
            func(this.notas);
        });
    }

    adicionarNota(categoria, titulo, conteudoNota) {
        const novaNota = new Nota(categoria, titulo, conteudoNota);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota {
    constructor(categoria, titulo, conteudoNota) {
        this.categoria = categoria;
        this.titulo = titulo;
        this.conteudoNota = conteudoNota;
    }
}