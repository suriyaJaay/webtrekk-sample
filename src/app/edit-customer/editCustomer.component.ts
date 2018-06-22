import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-editCustomer',
  templateUrl: './editCustomer.component.html',
  styleUrls: ['./editCustomer.component.css']
})
export class editCustomerComponent implements OnInit {

  id:number;
  data:Object = {};
  customer = [];
  exist = false;
  updateCustomerDetails:Object = {};
  public CustomerIdLbl = 'Customer ID';
  public NameLbl = 'Name';
  public BirthdayLbl = 'Birthday';
  public GenderLbl = 'Gender';
  public LastContact = 'Last Contact';
  public CustomerLifetimeValueLbl = "Customer's Lifetime Value";
  public headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  editCustDetails(cst) {
    this.updateCustomerDetails = {
     "id":parseInt(cst.id),
      "name": {
        "first": cst.first,
        "last":  cst.last,
      },
      "birthday":cst.birthday,          
      "gender": cst.gender,
      "lastContact":cst.lastContact,
      "customerLifetimeValue":parseInt(cst.customerLifetimeValue)
    };
    const url = `${"http://localhost:3001/custDetails"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.updateCustomerDetails), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3001/custDetails").subscribe(
      (res: Response) => {
        this.customer = res.json();
        for(var i = 0; i < this.customer.length ; i++) {
          if(parseInt(this.customer[i].id) === this.id) {
            this.exist = true;
            this.data = this.customer[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
