import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'assets/json/mainSidebar.json'

@Injectable({
  providedIn: 'root'
})
export class MainSideBarMenuService {

  constructor(private http: HttpClient) { }

  getItemsSidebar() {
    return this.http.get(endPoint);
  }
}
