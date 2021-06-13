import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DiscordService {

  constructor(public http:HttpClient) { }



  connectUser() {
    //return this.http.get('https://discord.com/api/oauth2/authorize?client_id=853620257620099072&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Ftest&response_type=code&scope=identify%20guilds%20email%20connections');
  }
}
