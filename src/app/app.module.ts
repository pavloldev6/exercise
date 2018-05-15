import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CatYearsPipe } from './cats/cat-years.pipe';
import { CatService } from './cat.service';
import { CatModule } from './cats/cat.module';


import { AppComponent } from './app.component';
import { CatDetailComponent } from './cats/cat-details.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent, CatDetailComponent, CatYearsPipe
  ],
  imports: [
    BrowserModule, FormsModule, CatModule, CoreModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
