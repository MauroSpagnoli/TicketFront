import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { payer } from '../../interface/payer';
import { MatDialog } from '@angular/material/dialog';
import { UsersCreateComponent } from '../users-create/users-create.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public payers: payer[] = [];

  constructor(
    public api: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.api.getPayers().subscribe(
      (data) => this.payers = data
    );
  }

  openDialog(){
    const dialogRef = this.dialog.open(UsersCreateComponent, {
      width: '250px'
    });
  }

}
