import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem{
    public atacar(p: Personagem): void {
        console.log("Rotina de ataque");
    }
    public regenerarVida(): void {
        console.log("Rotina de regeneração");
    }
}