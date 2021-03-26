import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  city: string;
  code: string;

  constructor(private router: Router) {


  }

  ngOnInit() {
  }


  saveForm() {

    const location = {
      city: this.city,
      state: this.code
    };

    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['home']);
  }

}
