import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType,ChartOptions ,ChartDataSets } from 'chart.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  selector: 'app-gradeusage',
  templateUrl: './gradeusage.component.html',
  styleUrls: ['./gradeusage.component.css']
})
export class GradeusageComponent implements OnInit {
  simple_array=[];
  constructor() { }

  ngOnInit(): void {
    var i1=0;
    var db = firebase.firestore();
    var citiesRef = db.collection("appflow");
    var query = citiesRef.where("clickGrade", "==", "5").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          i1++;


      });
      console.log(i1);

      //  this.simple_array.push({"name": "English","value": i1});

      this.simple_array.push(i1);
  })

  var i2=0;
var query = citiesRef.where("clickGrade", "==", "6").get().then((querySnapshot) => {
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
var query = citiesRef.where("clickGrade", "==", "7").get().then((querySnapshot) => {
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
var query = citiesRef.where("clickGrade", "==", "8").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      i4++;

  });

  this.simple_array.push(i4);

})
var i5=0;
var query = citiesRef.where("clickGrade", "==", "9").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      i5++;

  });

  this.simple_array.push(i5);

})
var i6=0;
var query = citiesRef.where("clickGrade", "==", "10").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      i6++;

  });

  this.simple_array.push(i6);

})

  }
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['5', '6', '7', '8', '9', '10'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] =[
    { data: this.simple_array, label: 'Grade usage' }];
}
