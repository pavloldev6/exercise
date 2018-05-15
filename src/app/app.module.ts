import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CatModule } from './cats/cat.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CatModule, CoreModule, SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
