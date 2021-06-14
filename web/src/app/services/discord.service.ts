import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class DiscordService {

  constructor(public http:HttpClient) { }



  getTestToken(code: string) {
    let data:any = {
      'client_id': environment.client_id,
      'client_secret': 'dMvLJWAfNCX4QqJ-QFu4hfc-UdJ92xSQ',
      'grant_type': 'authorization_code',
      'refresh_token': environment.redirect_url
    }
    return this.http.post(environment.discord_api + '/oauth2/token', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  getUser() {
    return this.http.get(environment.discord_api + '/users/@me');
  }
  getUserGuilds() {
    return this.http.get<any[]>(environment.discord_api + '/users/@me/guilds');
  }
}
