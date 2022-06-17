import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm = this.fb.group({
    fullusername:['',Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private studentService:StudentService, 
    private snackBar:MatSnackBar,
    private router:Router,
    private route$:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.studentService.registerStudent(this.registerForm.value).subscribe({
      next:(res)=>{
        if(res.status==="success"){
          this.snackBar.open(res.message,"close");
          this.route$.url.subscribe( value =>
            this.router.navigate(['signin'])
          );
        }else if (res.status==="fail"){
          this.snackBar.open(res.message,"close")
        }
      },
      error:(error)=>{
        this.snackBar.open(error.message,"close")
      },
      complete:()=>{}
    })
  }

}
