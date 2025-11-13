export class Emprestimo{
    protected _dataDeEmprestimo: Date;
    protected _dataDeDevolucao: Date;

    constructor(){
        this._dataDeEmprestimo = new Date();
        this._dataDeDevolucao = new Date();
    }
}