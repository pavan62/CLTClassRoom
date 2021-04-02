
import { Component, OnInit,ViewChild } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import { AddressService } from '../address.service';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import{  Subject } from 'rxjs';
// import{Observable}from 'rxjs';
// import{combineLatest} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login_count:any;
  user_count:any;
  minute_count:any;
  addresses :any;
  searchterm:string;
  dates;

subs;
selectdate;

dat;

id;

  constructor(private afs:AngularFirestore,private addressService:AddressService) {
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
              }
            } );
          }
        );




this.addressService.readAddress1().subscribe(
  (data)=>{

   this.dates= data.map ( (document)=>{
      return {
        id: document.payload.doc.id,
        ...document.payload.doc.data() as {}
      }
    } );
  }
);

this.addressService.readAddress1().subscribe(
(data)=>{

 this.dat= data.map ( (document)=>{
    return {
      id: document.payload.doc.id,
      ...document.payload.doc.data() as {}
    }
  } );
}
);

}


takedata (event:any) {

this. id = event.target.value;
console.log(this.id);

}



}

// search($event:any) {

//   let q = $event.target.value;
//   this.startAt.next(q);
//   this.endtAt.next(q+'\uf8ff')


// }

// firequery(start,end){
// return this.afs.collection('videos',ref=>ref.limit(10).orderBy('mediaSubject').startAt(start).endAt(end)).valueChanges();
// }
