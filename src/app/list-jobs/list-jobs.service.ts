import { Injectable } from '@angular/core';
import * as data from '../../mocks';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListJobsService {
    constructor() { } 

   getJobs() { 
   let jobsList =  data.getData();
   return of(jobsList);  
    }

}