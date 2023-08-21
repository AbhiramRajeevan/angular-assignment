import { Component, OnInit } from '@angular/core';
import {AbstractControl,ValidationErrors,ValidatorFn} from '@angular/forms'
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent {
  contactForm:FormGroup;
  submittedData:any[]=[];
  constructor(private frmBuilder:FormBuilder)
  {}
  ngOnInit(): void {
    this.contactForm=this.frmBuilder.group
    ({
      name:['',Validators.required],
      sloc:['',Validators.required],
      des:['',Validators.required],
      car:['',Validators.required],
      seat:['',[Validators.required,SeatAvailable]]
      
    });
  }
  onSubmit()
    {
      if(this.contactForm.valid){
        const formData=this.contactForm.value;
        this.submittedData.push(formData);
        this.contactForm.reset();
        alert("Form Submitted Details-> Name: "+formData.name+ ", Start Location: "+formData.sloc+", Destination: " +formData.des+", Car: "+formData.car+", Seats: "+formData.seat);
      }else{
        alert("Form is invalid");
      }
    }
}

function SeatAvailable(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value>0 && control.value<8) {
    return null;
  }
  return { 'seatInvalid': true };
}
