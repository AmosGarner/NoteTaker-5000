import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NotesComponent } from "./components/notes/notes.component";
import { HttpClientModule } from "@angular/common/http";
import { HeadingComponent } from "./components/heading/heading.component";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeadingComponent,
    HeadingComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
