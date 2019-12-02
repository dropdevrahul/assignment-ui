import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import { AuthenticationService } from '../auth/auth.service';
import { Inventory } from './inventory';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {
  inventory: Inventory;
  error_inventory: any;
  status_approve: string;
  status_approve_error: string;
  inventory_list: Inventory[];
  status: string;
  constructor(private service: InventoryService,
      private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.inventory = new Inventory();
    this.error_inventory = new Inventory();
    this.load_data()
  }

  load_data() {
    this.service.get().subscribe((result)=>{
        this.inventory_list = result;
      });
  }

  create() {
    this.status = ''
    this.service.create(this.inventory).subscribe((result)=>{
        this.error_inventory = new Inventory();
        this.inventory = new Inventory();
        this.status = 'Request Successful';
        this.load_data();
    }, (error)=>{
        this.error_inventory = error.error;
        this.status = ''
    });
  }

  approve(id: string){
    this.status_approve = ''
    this.status_approve_error = ''
    this.service.approve(id).subscribe((result)=>{
        this.status_approve = 'Request Succesful.';
        this.load_data();
    }, (error)=>{
        this.status_approve = '';
        this.status_approve_error = 'Request Failed.'
    })
  }

}
