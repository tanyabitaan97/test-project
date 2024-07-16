import { Component, OnInit } from '@angular/core';
import { Jobs } from '../models/jobs';
import { ListJobsService } from '../list-jobs/list-jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetailsService } from './job-details.service';
import { JobDetails } from '../models/jobdetails';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  jobDetails:JobDetails[]=[];
  industries!:string;
  description!:string;
  descriptionOne!:string;
  descriptionTwo!:string;
  responsibilitiesList:string[]=[];

  constructor(private jobDetailsService:JobDetailsService,private router:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {

    let jobId =  this.router.snapshot.paramMap.get('jobId');

   this.jobDetails = this.jobDetailsService.getJobById(Number(jobId));

   this.jobDetails[0].industries?.forEach((x:string)=>{
    var parser = new DOMParser;
    var dom = parser.parseFromString(x,'text/html');
    this.industries = dom.body.textContent!;
   })

   var parser = new DOMParser;
   var dom = parser.parseFromString(this.jobDetails[0].description!,'text/html');
   this.description = dom.body.textContent!;
   this.descriptionOne=this.description.split('Responsibilities:')[0]
   this.descriptionTwo=this.description.split('Responsibilities:')[1]

   let data:string[]=[];
   data=this.descriptionTwo?.split('.');

   data?.forEach((x:string)=>{
    this.responsibilitiesList.push(x);
   });
    
  }

  back() {
      this.route.navigate(['/']);
  }

}
