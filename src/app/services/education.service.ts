import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certification, University, Course } from '../interfaces/education.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private universitiesUrl = 'data/universities.json';
  private certificationsUrl = 'data/certifications.json';
  private coursesUrl = 'data/courses.json';

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.universitiesUrl);
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.certificationsUrl);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }
}
