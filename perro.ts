import { Animal } from "./animal";

export class Perro implements Animal {
  hacerSonido(): void {
    console.log("Guof guof");
  }

  mover(): void {
    console.log("El perro corre");
  }
}
