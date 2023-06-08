import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchivoServicesService {

  constructor() { }

  agregar(data:any){
    console.log(data)
  }
}
