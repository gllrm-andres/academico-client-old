import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gllrm-areas-page',
  templateUrl: './areas-page.component.html',
  styleUrls: ['./areas-page.component.scss'],
})
export class AreasPageComponent implements OnInit {
  areaForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.areaForm = this.fb.group({
      nombre: [null, Validators.required],
      alias: [null, Validators.required],
    });
  }

  onClick(e: Event) {
    console.log(e);
  }
}
