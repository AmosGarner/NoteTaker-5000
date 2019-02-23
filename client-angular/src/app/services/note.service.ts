import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private notesURL = 'http://localhost:3000/api/v1/notes';
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesURL);
  }
}
