import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';
import { ICourse } from '../courses.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bycourse',
  templateUrl: './bycourse.component.html',
  styleUrls: ['./bycourse.component.scss'],
})
export class BycourseComponent implements OnInit {
  currentCourse: ICourse = {
    title: '',
    description: '',
    cover: '',
    teacher: '',
  };
  //courseToUpdate?:ICourse
  //context : 'ADD' | 'UPDATE' = 'ADD'
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe({
      next: (data) => {
        this.currentCourse = data['courses']['payload'];
        console.log(this.currentCourse);
        
      },
      error: (error) => console.log(error),
    });
  }
   
  // this.activateRoute.params.subscribe(data=> {
  //   this.courseId = data['id'];
  //   console.log(this.courseId);

  // })

  // this.courseService.getCourseById(this.courseId).subscribe(data => {
  //   console.log( data  );

  // })

  // showCourseFormForUpdate(course: ICourse) {
  //   this.courseToUpdate={... course}
  //   this.context='UPDATE'
  // }

  // contentCourseOne(): void{
  //   this.courseService.getCourseById(this.courses).subscribe()
  // }
}
