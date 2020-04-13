import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AlertsService } from "./alert-service.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserComponent } from "./user/user.component";
import { HttpClient } from "selenium-webdriver/http";
import { StrikethroughDirective } from "./strikethrough-directive.directive";
import { AboutComponent } from "./about/about.component";
import { RouterModule, Routes } from "@angular/router";
import { DateCountPipe } from "./date-count.pipe";
import { NavbarComponent } from "./navbar/navbar.component";
const routes: Routes = [
  { path: "Home", component: UserComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserComponent,
    StrikethroughDirective,
    AboutComponent,
    DateCountPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlertsService], //add service to providers
  bootstrap: [AppComponent]
})
export class AppModule {}
