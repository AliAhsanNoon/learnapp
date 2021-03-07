import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'client';
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): any {
    return this.http.get("https://localhost:5001/api/Users").subscribe(response => {
      this.users = response
      console.log(this.users);
    }, (error) => {
      console.error(error);

    })
  }

}
