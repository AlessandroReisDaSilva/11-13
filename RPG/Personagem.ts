export abstract class Personagem{
    protected _nome: string = "";
    protected _vida: number = 100;
    protected _mana: number = 50;

    public abstract atacar(p: Personagem): void;
    public abstract regenerarVida(): void;
}