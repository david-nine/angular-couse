import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbidenNames = ['Anna', 'Jeorge'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUsernames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
    }
  }

  get getHobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    this.getHobbies.push(new FormControl(null, Validators.required));
  }

  forbiddenUsernames(formControl: FormControl): ValidationErrors {
    if (this.forbidenNames.indexOf(formControl.value) !== -1) {
      return {'forbiddenNames': true}
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promisse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          return resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promisse;
  }
}
