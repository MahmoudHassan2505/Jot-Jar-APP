import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent implements OnInit {
  loading = true;

  constructor(private router:Router){}

  ngOnInit() {
    // Simulate loading completion after 5 seconds
    setTimeout(() => {

      this.loading = false;
      
      //wait until Animation Done
      // setTimeout(() => {
      //   this.router.navigate(['/home/workspace'])
      // }, 900);

    }, 5000);
  }
}
