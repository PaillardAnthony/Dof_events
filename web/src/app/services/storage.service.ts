import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setToken(token:string) :void
  {
    window.sessionStorage.setItem('token', token)
  }

  getToken() {
    return window.sessionStorage.getItem('token');
  }

  hasToken() {
    return window.sessionStorage.getItem('token') != null;
  }

}
