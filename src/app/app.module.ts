import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { HeaderComponent } from './header/header.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { ElementModule } from './elements/element.module';
import { HttpClientModule } from '@angular/common/http';
import { BenchmarkingComponent } from './benchmarking/benchmarking.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { GaugeComponent } from './graphs/gauge/gauge.component';
import { AddcardComponent } from "../app/popups/addcard/addcard.component";
import {AddgraphComponent  } from "../app/popups/addgraph/addgraph.component";
import {ApplicationqualityComponent  } from "../app/popups/applicationquality/applicationquality.component";
import {  EditwidgetComponent} from "../app/popups/editwidget/editwidget.component";
import { ViewallcardComponent } from "../app/popups/viewallcard/viewallcard.component";
import {NgxUiLoaderService,NgxUiLoaderModule  } from "ngx-ui-loader";
import { BargraphComponent } from './graphs/barGraph/bargraph.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgDatepickerModule } from 'ng2-datepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    HeaderComponent,
    CardComponentComponent,
    BenchmarkingComponent,
    MonitoringComponent,
    GaugeComponent,
    AddcardComponent,
    AddgraphComponent,
    ApplicationqualityComponent,
    EditwidgetComponent,
    ViewallcardComponent,
    BargraphComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,ElementModule,
    NgxUiLoaderModule,
    NgScrollbarModule,
    NgDatepickerModule, 
    MyDateRangePickerModule,
    FormsModule,
    ReactiveFormsModule,DragDropModule
  ],
  providers: [NgxUiLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
