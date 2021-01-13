import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public form: FormGroup;
  title = 'app';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.email],
      checkbox: [''],
      radio: [''],
      slidetoggle:['']
    })
  }
  
}
