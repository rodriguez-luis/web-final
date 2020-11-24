import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ir(): void {
    this.router.navigateByUrl('/videos');
  }
}
