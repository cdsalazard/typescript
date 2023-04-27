//Vamos a crear una clase par crear objetos a partir de esta clase
class Training{
    //Podemos escribir public, pero no es obligatorio
    public _type: string;
 
    public _date: string;

    //Las privadas no podemos modificarlas, aunque si podemos verlas desde dentro de la clase
    private _comments: string;

    //Las de solo lectura, se pueden ver desde afueradel contructor pero no se pueden modificar
    readonly _distance: number;


    //Podemos usar la función get para obtener el valor de los valores
    public get comments(){
        return this._comments;
    }

    public set comments(){
        this._comments = "Comentarios"
    }


//Podemos darle al contrutor variablas por defecto
    constructor(
        type: string = "Training run", 
        distance: number = 0, 
        date: string = "today")
        {
        this._type = "";
        this._distance = 0;
        this._date = "";
        this._comments = "Comentario por defecto";
    }
   //Un método es una función dentro de un objeto
    /**
     * Formatea el entrenamiento para una mejor visualizacion
     * @returns Un entrenamiento formateado
     */
    format(){
        return 'On $[this._date} I did ${tihs._type} for ${this._distance} kms con los comentarios ${this._comments}.';
    }
}

//Creamos una verseión de la clase training, en la cual definimos el tipo de variable dentro del contructor
class Training_v2{


//Vamos a crear una clase par crear objetos a partir de esta clase    
//Podemos darle al contrutor variablas por defecto
    constructor(
        
            public__distance: number = 0,
            readonly _fecha: string = "01-01-2022",
            public_comments: string = "Comentario p,r defecto",
            private _type = ""
    ){}


    public get comments(){
        return this._comments;
    }

    public set comments(newComment){
        this._comments = "Comentarios";
    }




//Intanciamos (Creamos un objeto a partir de una clase) con los parentesis invocamos al constructor

const t1 = new Training("Long run", 21, "202-04-20");
const t2 = new Training("Short run", 18, "202-10-20");
const t3 = new Training("Intervals", 18, "202-10-20");
const t4 = new Training("Short run", 10);
const t5 = new Training("Short run");
const t6 = new Training();
t6._date = "24-01-01";


console.log(t1);
console.log(t2);

//Obtenemos el valor de la propiedad del objeto
console.log(t1._distance);
console.log(t1.format());



//Crearemos un arreglo de objetos

let trainings: Training[] = [];

//Agregamos objetos al arreglo
trainings.push(t1);
trainings.push(t2);
trainings.push(t3);
trainings.push(t4);
trainings.push(t5);´
trainings.push(new Training("Long run", 42, "2023-04-12"))

console.log(trainings);

//Iteramos sobre cada objeto para la función format
trainings.forEach( (training) => console.log(training.format()));