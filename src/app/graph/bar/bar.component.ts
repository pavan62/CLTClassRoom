import { Component, OnInit } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import { AddressService } from '../../address.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  simple_array:Number[]=[];
  single: any[];
  multi: any[];

  view:[700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['orange', 'lightBlue', 'paleGreen', 'salmon']
  };
  addresses :any;
  constructor(private afs:AngularFirestore,private addressService:AddressService) { }
results;

  ngOnInit(): void {
    var i1=0;
      var db = firebase.firestore();
      var citiesRef = db.collection("subjects");
      var query = citiesRef.where("languageName", "==", "English").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            i1++;


        });
        console.log(i1);

        this.simple_array.push(i1);
        console.log('English',i1);

    })

    var i2=0;
  var query = citiesRef.where("languageName", "==", "Hindi").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        i2++;

    });

    this.simple_array.push(i2);

})
var i3=0;
  var query = citiesRef.where("languageName", "==", "Kannada").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        i3++;

    });

    this.simple_array.push(i3);

})
var i4=0;
  var query = citiesRef.where("languageName", "==", "Marathi").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        i4++;

    });

    this.simple_array.push(i4);

})




console.log(this.simple_array);

this.results=[
  {
    "name": "English",
    "value": 8940000
  },
  {
    "name": "Hindi",
    "value": 5000000
  },
  {
    "name": "Kannada",
    "value": 5000000
  },
  {
    "name": "Marati",
    "value": 5000000
  }
]
    }

  }

