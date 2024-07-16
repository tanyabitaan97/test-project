import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-job-search';

  isSelectedFav:boolean=false;
  isSelectedHome:boolean=true;

  constructor(private router:Router) {}

  ngOnInit(): void {
    //localStorage.setItem('fav','[]');

    let data =  JSON.parse(localStorage.getItem('fav') || '[]'); 
    
    console.log('data is '+JSON.stringify(data));
  }

  tabSelectionHome() {
    this.isSelectedHome=true;
    this.isSelectedFav=false;
    this.router.navigate([''])
  
  
  }

  tabSelectionFav() {
    this.isSelectedFav=true;
    this.isSelectedHome=false;

    this.router.navigate(['/favorites'])

  
  }
}
