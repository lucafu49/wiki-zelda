import { Component, OnInit } from '@angular/core';
import { Dato } from 'src/app/interfaces/dato';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  dataArreglo: Dato[] = [];

  constructor(private apiService:ApiService){ }
  
  ngOnInit(): void{
   this.apiService.getCreatures().subscribe((data)=>{
    this.dataArreglo= data;
    console.log(this.dataArreglo);
   });
  }
}
