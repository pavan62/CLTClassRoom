import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';
//import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor( private fireStore : AngularFirestore) { }



  readAddress (){
    return this.fireStore.collection("videos").snapshotChanges();
  }

  readAddress1 (){
    return this.fireStore.collection("dates").snapshotChanges();
  }

     
  }


