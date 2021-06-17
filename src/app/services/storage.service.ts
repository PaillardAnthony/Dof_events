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

  setUserName(userName:string) :void
  {
    window.sessionStorage.setItem('userName', userName)
  }

  getToken(): string | null {
    return window.sessionStorage.getItem('token');
  }

  getUserName(): string | null {
    return window.sessionStorage.getItem('userName');
  }

  hasToken(): boolean {
    return window.sessionStorage.getItem('token') != null;
  }

}
