import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../mocks/mock-notes';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class NoteService {
  
  constructor() { }

  getNotes(): Observable<Note[]>{
    return of(NOTES);
  }
}
