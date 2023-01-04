import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-agregar-exp',
  templateUrl: './modal-agregar-exp.component.html',
  styleUrls: ['./modal-agregar-exp.component.css']
})
export class ModalAgregarExpComponent implements OnInit {

    contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    // this.onPathValue();
    // this.onSetValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Bezael' });
  }

  onSetValue(): void {
    // this.contactForm.setValue({ comment: 'Hola mundo' });
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      puesto: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', [Validators.required]],
      checkActual: [''],
      descripcion: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
    })
  }
    
}