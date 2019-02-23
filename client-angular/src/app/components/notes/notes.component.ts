import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  
  constructor(public notesService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void{
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

}
