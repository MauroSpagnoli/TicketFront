import { Component, OnInit } from '@angular/core';
import { payment } from 'src/app/interface/payment';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  public payments: payment[] = []

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getPayments().subscribe(
      (data) => {
        this.payments = data
        console.log(this.payments)
      }
    )
  }

}
