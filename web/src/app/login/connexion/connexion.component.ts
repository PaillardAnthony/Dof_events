import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from 
      '@angular/forms';
import { DiscordService } from 'src/app/services/discord.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(public discord: DiscordService, public route:Router) { }

  

  
  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
   ]);

  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  hide =true;//password hiding

  submit() {    
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=853620257620099072&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Ftest&response_type=token&scope=identify%20guilds%20guilds.join';
    
  }
  

}
