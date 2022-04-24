import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  movieId: any;
  moveUrl: any;
  moveDetails: any;
  bgClassColor: string = "white"

  constructor(private router: ActivatedRoute, private http: HttpClient, private location: Location) {

  }

  ngOnInit() {
    if(history.state.moveUrl) {
      this.moveUrl = history.state.moveUrl;
      let sub$ = this.http.get(this.moveUrl);
      sub$.subscribe(r => {
        this.moveDetails=r;
      })
    } else {
      this.location.back()
    }
  }

}
