import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { SampleInputComponent } from './sample-input/sample-input.component';
import { SampleTableService } from './sample-table.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleTableComponent,
    SampleInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SampleTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
