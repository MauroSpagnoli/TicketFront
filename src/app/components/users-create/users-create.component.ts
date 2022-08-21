import { Component, OnInit } from '@angular/core';
import { payer } from '../../interface/payer';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  public user: payer = new payer()

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  createUser(){
    this.api.createUser(this.user)
  }

}
