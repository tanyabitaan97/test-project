import { Routes } from '@angular/router';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
    {'path':'','component':ListJobsComponent},
    {'path':'favorites','component':FavoritesComponent},
    {'path':'jobs/:jobId','component':JobDetailsComponent}
];
