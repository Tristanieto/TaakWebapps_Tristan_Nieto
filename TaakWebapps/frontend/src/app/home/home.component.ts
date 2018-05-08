import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  get currentUser(): Observable<String>{
    return this.authService.user$;
  }

}
