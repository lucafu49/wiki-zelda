import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dato } from '../interfaces/dato';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  private urlApi = 'https://botw-compendium.herokuapp.com/api/v3/compendium/all';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getCreatures(): Observable<Dato[]>{
    return this.http.get<Dato[]>(`${this.urlApi}creatures`);
  }
  getEquipment():Observable<Dato[]>{
    return this.http.get<Dato[]>(`${this.urlApi}equipment`);
  }
  getMaterials(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApi}materials`);
  }
  getMonsters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApi}monsters`);
  }
  getTreasure(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApi}treasure`);
  }
}
