import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AngularFirestoreModule}from '@angular/fire/firestore'
import { AddressService } from './address.service';
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from 'src/environments/environment';

import{AngularFireAuthModule} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZingchartAngularModule } from 'zingchart-angular';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import{NgxChartsModule}from '@swimlane/ngx-charts';
import { PieComponent } from './graph/pie/pie.component';
import { BarComponent } from './graph/bar/bar.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { DatePipe } from '@angular/common'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { MatTableDataSource,MatTableModule  } from '@angular/material/table';
import{MatIconModule}from '@angular/material/icon';
import { TablesmatComponent } from './tablesmat/tablesmat.component';

import firebase from 'firebase/app';
import 'firebase/firestore';
import { Ng2chartComponent } from './ng2chart/ng2chart.component';
import { GradeusageComponent } from './gradeusage/gradeusage.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,


HeaderComponent,
    LoginComponent,

    RegisterComponent,

    PieComponent,

    BarComponent,
DashboardComponent,
    DateComponent,


    TablesmatComponent,



    Ng2chartComponent,

    GradeusageComponent,





  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    ChartsModule,
MatCardModule,


ZingchartAngularModule

  ],
  providers: [AddressService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
