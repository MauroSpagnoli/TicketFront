import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { payment } from '../../interface/payment';
@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  public payment: payment = new payment()

  constructor( 
    private activatedRoute: ActivatedRoute,
    public api: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      map =>{
        this.api.getSpecificPayment(map.get("id")!).subscribe(
          (data) => {
            this.payment = data[0]
            console.log(this.payment)
          }
        )
      }
    )
  }

}
