import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-ng2chart',
  templateUrl: './ng2chart.component.html',
  styleUrls: ['./ng2chart.component.css']
})
export class Ng2chartComponent implements OnInit {
  simple_array=[];

  constructor() { }

  ngOnInit(): void {
    var i1=0;
      var db = firebase.firestore();
      var citiesRef = db.collection("subjects");
      var query = citiesRef.where("curriculumName", "==", "Karnataka State Syllabus").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            i1++;


        });
        console.log(i1);

        //  this.simple_array.push({"name": "English","value": i1});

        this.simple_array.push(i1);
    })

    var i2=0;
  var query = citiesRef.where("curriculumName", "==", "Maharashtra State Syllabus").get().then((querySnapshot) => {
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
  var query = citiesRef.where("curriculumName", "==", "Rajasthan State Syllabus").get().then((querySnapshot) => {
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



  }


  doughnutChartLabels: Label[] = ['Karnataka State', 'Maharashtra State', 'Rajasthan State'];
  doughnutChartData: MultiDataSet = [this.simple_array];
  doughnutChartType: ChartType = 'doughnut';
  pieChartColors = [
    {
      backgroundColor: [' #ff647c ', 'orange', '#0084f4'],
    },
  ];
}


