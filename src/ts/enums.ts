enum TrainingType {
    TRAINING_RUN,
    INTERVALS,
    LONG_RUN,
    MARATHON
}


//Tipo de entreamiento puede tomar solo uno de los tres valores del enum TrainingType
let tipoEntrenamiento: TrainingType;
tipoEntrenamiento = TrainingType.INTERVALS;

console.log(tipoEntrenamiento);

if(tipoEntrenamiento == TrainingType.INTERVALS){
    console.log("training run");
} else if (tipoEntrenamiento == TrainingType.INTERVALS){
    console.log("intervals");
}