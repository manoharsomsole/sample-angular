import { Component, OnInit } from '@angular/core';
import { ServiceCallService } from '../services/serviceCalls.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public serviceObj: ServiceCallService, private fb: FormBuilder) { }
  public countryList: any;
  public url = 'http://localhost:4200/assets/countries.json';
  public countrySelected = 'selected';
  public sample: FormGroup;
  public ctryName: any;
  
  ngOnInit() {
    this.sample = this.fb.group({
    'countrySelected' : [null, Validators.compose([Validators.required])]
    });
    this.getCountryList();
  }
  getCountryList() {
    this.serviceObj.getServiceCall(this.url).
    subscribe(

     response =>{ this.countryList =response.json(); console.log(JSON.stringify(this.countryList))},
     error =>{ console.log(error)},
     );
  }
  onCountryChange() {
    this.ctryName = 'We are in '+this.countrySelected;
  }
  
}

