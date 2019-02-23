import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NotesComponent } from "./components/notes/notes.component";
import { HeadingComponent } from "./components/heading/heading.component";
import { HeaderComponent } from "./components/header/header.component";
import { NoteComponent } from "./components/note/note.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    HeadingComponent,
    NoteComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
