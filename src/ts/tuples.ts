console.log("Tuples");

//Son diferentes a los arreglos
let arreglo = ["Cata", 21]; //Solo se le pueden agregar mas string y mas numbers

//Modificamos una de sus entradas
arreglo[0] = 21;
arreglo[1] = "Mary"

//Las tuplas son estructuras más rígidas y se definen los tipos de datos de la tupla
let tuple1: [string, number, boolean];
let tuple2: [string, number] = ["Emilio", 13];
tuple1 = ["Valeria", 10, false]; //Luego asignamos las variables en función de los tipos de datos

//Podemos modificar también sus valores, siempre que concuerden con el tipo de dato
tuple1[1] = 100;

