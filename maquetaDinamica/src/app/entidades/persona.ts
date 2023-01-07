export class Persona {
    Id!: number;
    nombre: string;
    apellido: string;
    img: string;
    titulo: string;
    acercaDe: string;
    banner: string;
    email: string;
    curriculum: string;

    constructor(nombre: string, apellido: string, img: string, titulo: string, acercaDe: string, banner: string, email: string, curriculum: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.acercaDe = acercaDe;
        this.banner = banner;
        this.email = email;
        this.curriculum = curriculum;
    }
}
