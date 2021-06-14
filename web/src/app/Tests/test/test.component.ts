import { DiscordService } from 'src/app/services/discord.service';
import { environment } from './../../../environments/environment';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  token: any = [];
  url: any = [];
  constructor(private Router: ActivatedRoute, private http: HttpClient, private discord: DiscordService, private storage: StorageService) { 
  }

  displayedColumns: any[] = ['name', 'owner'];
  showFiller = false;

  ngOnInit(): void {
    this.getAllData()
    
  }

  async getAllData() {
    try {
     await this.Router.fragment.subscribe(
        (fragments) => {
         this.url = fragments?.split('&')
         console.log(this.url[1])
         this.token = this.url[1].split('=');
         this.token = this.token[1];
        }
      ); // update on all changes
      await this.storage.setToken(this.token)
      await this.discord.getUser().subscribe((result) => {
          console.log(result);
      })
      
      await this.discord.getUserGuilds().subscribe((result) => {
          console.log(result);
         this.SERVERS_DATA = result.map(_elt => {//modifie la forme du tableau
            return { name: _elt.name, owner: _elt.owner}
          });
          
          console.log(this.SERVERS_DATA);        
      })
    } catch (e) {

    }
  }

  SERVERS_DATA: any[] = [];
  dataSource = new MatTableDataSource<any>(this.SERVERS_DATA);
  


  

}
