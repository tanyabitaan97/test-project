import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite';
import { Jobs } from '../models/jobs';
import { ListJobsService } from '../list-jobs/list-jobs.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {

  displayFavList:Favorite[]=[];
  jobsList:Jobs[]=[];
  favId:Number[]=[];
  
  constructor(private listJobsService:ListJobsService,private router:Router) {}

  ngOnInit() {

   this.displayFavList =  JSON.parse(localStorage.getItem('fav') || '[]');   

   this.listJobsService.getJobs().subscribe((jobData:Jobs[])=>{
    this.jobsList=jobData;
})

console.log(this.displayFavList);


this.displayFavList.forEach((x:Favorite)=>{
  if(x.isFavorite) {
  this.favId.push(Number(x.id.split('-')[1]));
  }
});


let data:Jobs[]=[];
this.jobsList.forEach((x:Jobs)=>{
    if(this.favId.includes(x.id)) {
        data.push(x);
    }
});

this.jobsList=data;

console.log(JSON.stringify(this.jobsList));
    
}


}
