import { Component, OnInit ,ViewChild} from '@angular/core';

import { AddressService } from '../address.service';
import{AngularFirestore} from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import{MatPaginator }from '@angular/material/paginator';

import{MatSort }from '@angular/material/sort';
import {NgForm} from '@angular/forms'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { threadId } from 'node:worker_threads';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  login_count:any;
  user_count:any;
  formData :any;
  searchitem;
  addresses : any;
  searchKey: string;
sumTotal=0;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor( private addressService : AddressService,private afs:AngularFirestore) {
    this.addresses=[];

   }

  ngOnInit() {
    var i1=0;
    var i2;
    var sum=0;
      var db = firebase.firestore();
      var citiesRef = db.collection("dates");
      var query = citiesRef.where("dateTimeVideosWatched", ">", 0).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

           sum= sum+doc.data().dateTimeVideosWatched;


        });
        console.log('hello',sum);
        this.sumTotal=sum;
        //console.log('hello',query);

        //  this.simple_array.push({"name": "English","value": i1});


    })

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
          console.log(this.listData);
        })


        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
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
