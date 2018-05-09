import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  private audio;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.logout();
    // this.playAudio();

  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/Please_come_again.mp3";
    audio.load();
    audio.play();
    }

}
