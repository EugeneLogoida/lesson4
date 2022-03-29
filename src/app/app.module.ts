import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { SearchPipe } from './task/search.pipe';
import { SortPipe } from './task/sort.pipe';

@NgModule({
  declarations: [	
    AppComponent,
    TaskComponent,
    SearchPipe,
    SortPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
