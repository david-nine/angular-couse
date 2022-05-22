import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') form: NgForm;

  defaultSubscription = 'advanced';

  onSubmit() {
    const form = this.form.form;
    if (!this.form.valid) {
      Object.keys(form.controls).forEach(function (index) {
        form.controls[index].markAsTouched();
      });
      return; 
    }
    console.log(form);
  }

}
