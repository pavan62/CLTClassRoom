import { DatePipe } from '@angular/common';
import { Component, OnInit,ViewChild} from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{AngularFirestore} from '@angular/fire/firestore';

import { AddressService } from '../address.service';

import * as XLSX from 'xlsx';
import { MatTableDataSource } from '@angular/material/table';
import{MatPaginator }from '@angular/material/paginator';

import{MatSort }from '@angular/material/sort';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
selectdate;
matdate;
dates;
dat;
months;
months1;
id;
today =  new Date();
today1 =this.datepipe.transform(this.today, 'yyyy-MM-dd');
Ecount;
oneweek;
fileName= 'ExcelSheet.xlsx';
results;
results1;
count;

expensesCollection:any;
listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Sl No','Media', 'DeviceId', 'Start Time', 'End Time', 'Server Time','Watch Time'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private afs:AngularFirestore,private addressService:AddressService,private datepipe: DatePipe,private db:AngularFireDatabaseModule) {


   }


  ngOnInit(): void {



  


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

  // var Ecount=  this.englishcount();


  }


takedata (event:any) {

  this. id = event.target.value;


}

takedata1 () {
  this.matdate =this.datepipe.transform(this.selectdate, 'yyyy-MM-dd');


}





takedataMonth(event: any){
  switch(event.target.value) {
    case "month":
      var someDate = new Date();
      var numberOfDaysToAdd = -30;
      someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
      this.oneweek =this.datepipe.transform(someDate, 'yyyy-MM-dd');
      //  console.log(someDate);
      //  console.log(this.oneweek);
       break;

    case "week":
      var someDate = new Date();
      var numberOfDaysToAdd = -7;
      someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
      this.oneweek =this.datepipe.transform(someDate, 'yyyy-MM-dd');
      //  console.log(someDate);
      //  console.log(this.oneweek);
       this.matdate =this.datepipe.transform(this.selectdate, 'yyyy-MM-dd');
      //  console.log(this.matdate);
       break;
  }



}















exportexcel(): void
{
   /* table id is passed over here */
   let element = document.getElementById('excel-table');
   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

   /* generate workbook and add the worksheet */
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

   /* save to file */
   XLSX.writeFile(wb, this.fileName);

}



// }
// week(){

// }
}
