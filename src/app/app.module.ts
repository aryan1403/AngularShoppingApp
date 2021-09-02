import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsComponent } from './Components/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
