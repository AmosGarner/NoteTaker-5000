import { Component, OnInit } from "@angular/core";
import { Note } from "src/app/models/note";
import { NoteService } from "src/app/services/note.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  private notes: Note[];

  constructor(public noteService: NoteService) {}
  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.list().subscribe(notes => (this.notes = notes));
  }

  createNote(title: string, body: string): void {
    title = title.trim();
    body = body.trim();
    if (!title || !body) return;
    this.noteService
      .create({ title, body } as Note)
      .subscribe(note => this.notes.push(note));
  }
}
