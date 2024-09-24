import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../../services/education.service';
import { Certification, Course, University } from '../../../interfaces/education.interface';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [],
  templateUrl: './education-section.component.html'
})
export class EducationSectionComponent implements OnInit {

  universitiesList: University[] = [];
  certificationsList: Certification[] = [];
  coursesList: Course[] = [];
  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getUniversities().subscribe((data: University[]) => {
      this.universitiesList = data;
    });
    this.educationService.getCertifications().subscribe((data: Certification[]) => {
      this.certificationsList = data;
    });
    this.educationService.getCourses().subscribe((data: Course[]) => {
      this.coursesList = data;
    });
  }
}
