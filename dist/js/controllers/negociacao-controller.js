import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { negociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new negociacoesView("#negociacoesView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
