import { Component, OnInit ,ViewChild} from '@angular/core';

import { AddressService } from '../address.service';
import{AngularFirestore} from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import{MatPaginator }from '@angular/material/paginator';

import{MatSort }from '@angular/material/sort';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-tablesmat',
  templateUrl: './tablesmat.component.html',
  styleUrls: ['./tablesmat.component.css']
})
export class TablesmatComponent implements OnInit {



  login_count:any;
  user_count:any;
  formData :any;
  searchitem;
  addresses : any;
  searchKey: string;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Sl No','Media', 'DeviceId', 'Start Time', 'End Time', 'Server Time','Watch Time'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor( private addressService : AddressService,private afs:AngularFirestore) {
    this.addresses=[];

   }

  ngOnInit() {
    this.login_count= this.afs.collection('logins').valueChanges().subscribe( values => this.login_count=values.length);
    this.user_count= this.afs.collection('users').valueChanges().subscribe( values => this.user_count=values.length);
    this.addressService.readAddress().subscribe(
      (data)=>{

       this.addresses= data.map ( (document)=>{
          return {
            id: document.payload.doc.id,
            ...document.payload.doc.data() as {}
          };
        });
        this.afs.collection('videos').valueChanges().subscribe((data)=>{
          this.listData = new MatTableDataSource(data);
          setTimeout(() => this.listData.paginator = this.paginator);

        })


        this.listData.sort = this.sort;
        // setTimeout(() => this.listData.paginator = this.paginator);
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      });
     };
       } );
}
  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  }

