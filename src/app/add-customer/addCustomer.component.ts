import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-addCust',
  templateUrl: './addCustomer.component.html',
  styleUrls: ['./addCustomer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private http: Http) { }
  successMSG:string = "New record has been added successfully";
  isRecordInserted: boolean = false;
  public CustomerIdLbl = 'Customer ID';
  public NameLbl = 'Name';
  public BirthdayLbl = 'Birthday';
  public GenderLbl = 'Gender';
  public LastContact = 'Last Contact';
  public CustomerLifetimeValueLbl = "Customer's Lifetime Value";
  addNewCustomer:Object = {};

  addNewCustomerRecord = function(cst) {
    this.addNewCustomer = {
      "id":parseInt(cst.id),
      "name": {
        "first": cst.first,
        "last":  cst.last,
      },
      "birthday":cst.birthday,          
      "gender": cst.gender,
      "lastContact":cst.lastContact,
      "customerLifetimeValue":parseInt(cst.customerLifetimeValue)
    }
    this.http.post("http://localhost:3001/custDetails/", this.addNewCustomer).subscribe((res:Response) => {
      console.log("res",Response)
      this.isRecordInserted = true;
    })
  }

  ngOnInit() {
  }

}
