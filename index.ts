import { AnimalFactory } from "./animalFactory";

let animales = ["perro", "gato", "pajaro", "pez"]; //si le pasamos un animal que no existe, el programa no se detiene, 
//solo imprime un mensaje diciendo que no lo reconoce y continua con el siguiente animal
let factory = new AnimalFactory();

for (let i = 0; i < animales.length; i++) {
  let tipo = animales[i];
  let animal = factory.crearAnimal(tipo);
  if (animal) {
    animal.hacerSonido();
    animal.mover();
    console.log("-----------");
  }
}