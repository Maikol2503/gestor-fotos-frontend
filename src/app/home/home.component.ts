import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
mostrarBarraDeFiltro = false;


mostrarBarraFiltro(){
  this.mostrarBarraDeFiltro = this.mostrarBarraDeFiltro == false ? true : false
}
  
}
