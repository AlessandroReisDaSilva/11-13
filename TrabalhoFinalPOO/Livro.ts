export class Livro{
    protected _titulo: string;
    protected _autor: string;
    protected _ISBN: string;
    protected _anoDePublicacao: number;

    constructor(){
        this._titulo = "";
        this._autor = "";
        this._ISBN = "";
        this._anoDePublicacao = 0;
    }
    public criarLivro(titulo: string, autor: string, ISBN: string, anoDePublicacao: number): Livro{
        this._titulo = titulo;
        this._autor = autor;
        this._ISBN = ISBN;
        this._anoDePublicacao = anoDePublicacao;
        return this;
    }
}