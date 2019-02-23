import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class NoteService {
  private apiURL = "http://localhost:3000/api/v1";

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  list(): Observable<Note[]> {
    return this.http
      .get<Note[]>(`${this.apiURL}/notes/`)
      .pipe(catchError(this.handleError("list", [])));
  }

  create(note: Note): any {
    return this.http.post<Note>(`${this.apiURL}/note`, note, httpOptions).pipe(
      tap((newNote: Note) => console.log("Note Created:", newNote)),
      catchError(this.handleError<Note>("create"))
    );
  }
}
