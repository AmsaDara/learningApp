import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from './courses.model';
import { CourseService } from './courses.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: any;

  //courseToUpdate?:ICourse
  //context : 'ADD' | 'UPDATE' = 'ADD'
  constructor(
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loadCourses()
  }
  
  loadCourses(){
    this.courseService.getAllCourse().subscribe({
      next: (data) => {
        if (data.status !== 'error') {
          this.courses = data.payload;
        } else {
          this.snackBar.open(data.message, 'x');
          this.courses = [];
        }
      },
      error: (error) => {
        this.snackBar.open(JSON.stringify(error), 'x');
      },
    });
  }
  
  ngOnInit() {
    this.loadCourses()
  }

  // showCourseFormForUpdate(course: ICourse) {
  //   this.courseToUpdate={... course}
  //   this.context='UPDATE'
  // }

  courseById(): void {
    //this.courseService.getCourseById(this.courseId).subscribe()
    this.router.navigate(['/coursesBy_id/{{courses.id}}']);
  }

  deleteCourse(course: ICourse) {
    this.courseService.removeCourse(course).subscribe(console.log);
    this.courseService
      .getAllCourse()
      .subscribe((data) => (this.courses = data));
  }
}
