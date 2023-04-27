

let variable1: number = 0;

//Exportamos las clases
export class Training1 {
    constructor(
        public type: string,
        readonly distance:number,
        public date: string,
        private comments: string = ""
    ) {}
}