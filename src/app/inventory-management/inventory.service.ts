import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  url = environment.baseUrl + '/api/inventory/list'
  create_url = environment.baseUrl + '/api/inventory/create/'
  approve_url = environment.baseUrl + '/api/inventory/update/'

  constructor(private httpClient: HttpClient) {
  }

  get(){
    return this.httpClient.get<Inventory[]>(this.url);
  }

  approve(id: string){
    return this.httpClient.put<Inventory>(this.approve_url + id + '/');
  }


  create(item: Inventory){
    return this.httpClient.post<Inventory>(this.create_url, item);
  }
}
