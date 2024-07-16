import { Injectable } from '@angular/core';
import * as data from '../../mocks';
import { of } from 'rxjs';
import { JobDetails } from '../models/jobdetails';

@Injectable({ providedIn: 'root' })
export class JobDetailsService {
    constructor() { } 

   getJobById(id:number) { 
   let jobById =  data.getDataById();
 
   let value:JobDetails[]=[];
   if(Object.entries(jobById).find(([key]) => Number(key) === id)?.[1]) {
    value.push(Object.entries(jobById).find(([key]) => Number(key) === id)?.[1]!);
   }
   return value;
    }

}