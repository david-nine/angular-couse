import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('f')
  form: NgForm;

  user: AppData = {} as AppData;
  defaultQuestion: string = 'pet'
  answer = '';
  submited:boolean = false;
  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  get userData(): FormGroup {
    return this.form.controls['userData'] as FormGroup;
  }

  // onSubmit(form: NgForm):void {
  //   console.log(form);
  // }

  onSubmit():void {
    
    this.submited = this.form.form.valid;
    if (this.submited) {
      this.user = this.form.value as AppData;
    }
    else {
      this.userData.controls['username'].markAsTouched();
      this.userData.controls['email'].markAsTouched();
      this.form.form.controls['secret'].markAsTouched();
    }
  }
}

interface AppData {
  userData: {
    username: string,
    email: string
  },
  secret: string,
  questionAnswer: string,
  gender: string,

}