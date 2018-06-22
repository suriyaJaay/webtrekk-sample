import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }
  customerID:number;
  public CustomerIdLbl = 'Customer ID';
  public NameLbl = 'Name';
  public BirthdayLbl = 'Birthday';
  public GenderLbl = 'Gender';
  public LastContact = 'Last Contact';
  public CustomerLifetimeValueLbl = "Customer's Lifetime Value";
  public udateLbl = "Update";
  public delelteLbl = "Delete";
  public headers = new Headers({ 'Content-Type': 'application/json'});

  custDetails = [];
  getAllCustomerList = function() {
    this.http.get("http://localhost:3001/custDetails").subscribe(
      (res: Response) => {
        console.log("customer data", this.custDetails)
        this.custDetails = res.json();
      }
    )
  }
  
  removeCustData = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:3001/custDetails"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.getAllCustomerList();
        })
    }
  }

  ngOnInit() {
    this.getAllCustomerList();
  }
}
