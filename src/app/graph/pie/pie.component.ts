import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/address.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import{AngularFirestore} from '@angular/fire/firestore';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import{Chart} from 'node_modules/chart.js';

import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor(private addrs:AddressService,private afs:AngularFirestore) { }
  results=[];
  simple_array=[];
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

        //  this.simple_array.push({"name": "English","value": i1});

        this.simple_array.push(i1);
    })

    var i2=0;
  var query = citiesRef.where("languageName", "==", "Hindi").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        i2++;

    });

    // this.simple_array.push({
    //   "name": "Hindi",
    //   "value": i2
    // });
    this.simple_array.push(i2);
})
var i3=0;
  var query = citiesRef.where("languageName", "==", "Kannada").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        i3++;

    });

    // this.simple_array.push({
    //   "name": "Kannada",
    //   "value": i3
    // });
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



// console.log(this.simple_array);
// console.log(this.results);

}
pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function (tooltipItems, data) {
        return data.datasets[0].data[tooltipItems.index] + ' %';
      }
    }
  },
};

pieChartLabels: Label[] = ['English', 'Hindi', 'Kannada', 'Marathi'];

pieChartData: number[] = this.simple_array;

pieChartType: ChartType = 'pie';

pieChartLegend = true;

pieChartPlugins = [];

pieChartColors = [
  {
    backgroundColor: ['orange', 'lightBlue', 'paleGreen', 'salmon'],
  },
];
}


