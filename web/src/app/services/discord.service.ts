import { GuildInterface } from './../interfaces/discord/guild-interface';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class DiscordService {

  constructor(public http:HttpClient) { }


  getUser(): Observable<any> {
    return this.http.get(environment.discord_api + '/users/@me');
  }
  getUserGuilds(): Observable<GuildInterface[]> {
    return this.http.get<GuildInterface[]>(environment.discord_api + '/users/@me/guilds');
  }
}
