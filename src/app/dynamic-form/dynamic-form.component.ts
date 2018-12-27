import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
testForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.testForm = this._formBuilder.group({
        name: [''],
        address: this._formBuilder.array([
          this.initAddress()
        ])
    });
  }
  initAddress() {
    return this._formBuilder.group( {
        place: ['']
    });
  }
  addAddress() {
    const control = <FormArray> this.testForm.controls['address'];
    control.push(this.initAddress());
  }
  removeAddress(i) {
    const control = <FormArray> this.testForm.controls['address'];
    control.removeAt(i);
  }
save() {
    console.log('formData', this.testForm.value);
}
}
