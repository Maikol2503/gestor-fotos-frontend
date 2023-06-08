import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms'
import { ArchivoServicesService } from '../archivo-services.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

    constructor (private archivoService: ArchivoServicesService){}

    nombre!: string
    ranking!: number
    archivo!: string

    tipoDeArchivo(archivo:string) {
    // esta funcion solo recibe jpg, jpeg, png, mp3, mp4. en caso que no sea ninguno de estos retorna error
    if(archivo === undefined)return "'No se encontro ningun archivo'";
    const extension = archivo.split('.').pop()?.toLowerCase();
    let tipoDeExtension:string;
        switch (extension) {
            case "jpg":
                tipoDeExtension = "jpg"
                return tipoDeExtension;
            case "jpeg":
                tipoDeExtension = "jpeg"
                return tipoDeExtension;
            case "png":
                tipoDeExtension = "png"
                return tipoDeExtension;
            case "mp3":
                tipoDeExtension = "mp3"
                return tipoDeExtension;
            case "mp4":
                tipoDeExtension = "mp4"
                return tipoDeExtension;
            default:
                return "Archivo invalido, solo se permiten archivos jpg, jpeg, png, mp3, mp4"
        }

    }

    agregarDatos() {
        let hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let fecha = new Date().toLocaleDateString()

        // if(this.nombre === undefined){
        //     alert("El Campo nombre esta vacio")
        // } 
        // if(this.archivo === undefined){
        //     alert("El Campo archivo esta vacio")
        // }

        let datos = {
            "nombre":this.nombre,
            "archivo":this.archivo,
            "ranking":this.ranking,
            "tipoArchivo": this.tipoDeArchivo(this.archivo),
            "fecha": fecha + " " + hora
        }
        this.archivoService.agregar(datos)
        return "Agregado correctamente"
    }

}
