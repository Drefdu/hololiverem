// home.page.ts
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hololive: any = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    // Llama a la función get() en el momento de inicialización del componente
    this.get();
  }

  get() {
    this.api.get().subscribe(
      (data) => {
        console.log(data);
        // Asigna los datos recibidos a la propiedad hololive
        this.hololive = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  add(data: any) {
    let name = { nombre: data.value };
    this.api.add(name).subscribe(
      (data) => {
        console.log(data);
        // Asigna los datos recibidos a la propiedad hololive
        this.hololive = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
