import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reservationForm: FormGroup;

  date = new Date();
  hourDelta = 0;
  isScheduleOk = false;
  client = { firstName: '', lastName: '', email: '', phone: '' };


  timeOptions = ["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30"];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.timeZoneOffset(new Date());
  }

  createForm(): any {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: "",
      people: 1
    });
  }

  timeZoneOffset(date: Date) {
    const offset = date.getTimezoneOffset() / 60;
    if (offset == 2) {
      this.hourDelta = 1;
    }
  }

  saveReservation() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm);
      this.isScheduleOk = true;
    }
  }

  finalizeReservation(formValue) {
    console.log(formValue);
  }
}
