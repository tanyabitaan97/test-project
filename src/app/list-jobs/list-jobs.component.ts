import { Component, OnInit } from '@angular/core';
import { ListJobsService } from './list-jobs.service';
import { Jobs } from '../models/jobs';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'app-list-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.css'
})
export class ListJobsComponent implements OnInit {

  constructor(private listJobsService:ListJobsService,private router:Router) {}

  jobsList:Jobs[]=[];
  favList:Favorite[]=[];
  favId:Number[]=[];

  ngOnInit() {

    this.listJobsService.getJobs().subscribe((jobData:Jobs[])=>{
        this.jobsList=jobData;
    })

    this.favList =  JSON.parse(localStorage.getItem('fav') || '[]');  

   this.favList.forEach((x:Favorite)=>{
  if(x.isFavorite) {
  this.favId.push(Number(x.id.split('-')[1]));
  }
});


let data:Jobs[]=[];
this.jobsList.forEach((x:Jobs)=>{
    if(this.favId.includes(x.id)) {
        x.isFavorite=true;
    }
});


  }

  toggleStar(id:number) {

    let isPresent:boolean=false;
    this.favList =  JSON.parse(localStorage.getItem('fav') || '[]');   
    this.favList.forEach((x:Favorite)=>{
        if(x.id==('star-'+id)) {
          isPresent=true;
          if(x.isFavorite) {
            x.isFavorite=false;
          } else {
            x.isFavorite=true;
          }
        }
    })

    if(!isPresent) {
    let obj:Favorite = {
      'id':'star-'+id,
      'isFavorite':true
    }
    this.favList.push(obj);
  }

  this.jobsList.forEach((x:Jobs)=>{
    if(x.id==id) {
      if(x.isFavorite) {
        x.isFavorite=false;
      } else {
        x.isFavorite=true;
      }
    }
  })


localStorage.setItem('fav', JSON.stringify(this.favList));
    
  }

  routingForDetails(id:number) {
      this.router.navigate(['jobs',id])
  }

}
