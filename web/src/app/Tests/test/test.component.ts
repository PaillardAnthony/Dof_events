import { MatTableDataSource } from '@angular/material/table';
import { catchError, map } from 'rxjs/operators';
import { DiscordService } from 'src/app/services/discord.service';
import { environment } from './../../../environments/environment';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { GuildInterface } from 'src/app/interfaces/discord/guild-interface';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  token: any = [];
  url: any = [];
  server: any[] = [];
  server$: Observable<MatTableDataSource<GuildInterface>>
  dataSource: any;
  constructor(private Router: ActivatedRoute, private http: HttpClient, private discord: DiscordService, public storage: StorageService, private spinner : NgxSpinnerService) { 
    this.server$ = this.discord.getUserGuilds().pipe(map((data) => new MatTableDataSource(data) ));
    
  }

  displayedColumns: any[] = ['icons', 'name', 'owner'];
  showFiller: boolean = false;

   ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();
     this.getAllData()
     this.getLog();
   //  this.getServerList();
  }

    getAllData(): void {
      this.Router.fragment.subscribe(
        (fragments) => {
         this.url = fragments?.split('&')
        // console.log(this.url[1])
         this.token = this.url[1].split('=');
         this.token = this.token[1];
        }
      ); // update on all changes
      this.storage.setToken(this.token)
       this.discord.getUser().subscribe((result) => {
          console.log('user', result);
          this.storage.setUserName(result.username);
      })   
  }

  getLog() {
    this.discord.getUserGuilds().subscribe(res => {
      console.log(res)
    })
  }
  
}
