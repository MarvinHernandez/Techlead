import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {ValidatePhone} from '../../validators/phoneno.validator';
import {ValidateCardNum} from '../../validators/cardnum.validator';
import {ValidatePostalCode} from '../../validators/postalcode.validator';
import {ValidateCardSecurityCode} from '../../validators/securitycode.validator';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './member-create.component.html'
})
export class MemberCreateComponent implements OnInit {
  createAccountForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  email: FormControl;
  paymentType: FormControl;
  cardNumber: FormControl;
  expiryDate: FormControl;
  securityCode: FormControl;
  holdersFirstName: FormControl;
  holdersLastName: FormControl;
  city: FormControl;
  province: FormControl;
  billingAddress1: FormControl;
  billingAddress2: FormControl;
  postalCode: FormControl;
  phoneNumber: FormControl;

  constructor(private builder: FormBuilder) {
    this.userName = new FormControl('', Validators.compose([Validators.required]));
    this.password = new FormControl('', Validators.compose([Validators.required]));
    this.email = new FormControl('', Validators.compose([Validators.required, Validators.email]));
    this.paymentType = new FormControl('', Validators.compose([Validators.required]));
    this.cardNumber = new FormControl('', Validators.compose([Validators.required, ValidateCardNum]));
    this.expiryDate = new FormControl('', Validators.compose([Validators.required]));
    this.securityCode = new FormControl('', Validators.compose([Validators.required, ValidateCardSecurityCode]));
    this.holdersFirstName = new FormControl('', Validators.compose([Validators.required]));
    this.holdersLastName = new FormControl('', Validators.compose([Validators.required]));
    this.city = new FormControl('', Validators.compose([Validators.required]));
    this.province = new FormControl('', Validators.compose([Validators.required]));
    this.billingAddress1 = new FormControl('', Validators.compose([Validators.required]));
    this.billingAddress2 = new FormControl('', Validators.compose([Validators.required]));
    this.postalCode = new FormControl('', Validators.compose([Validators.required, ValidatePostalCode]));
    this.phoneNumber = new FormControl('', Validators.compose([Validators.required, ValidatePhone]));
  }

  ngOnInit(): void {
    this.createAccountForm = this.builder.group({
      userName : this.userName,
      password: this.password,
      email: this.email,
      paymentType: this.paymentType,
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      securityCode: this.securityCode,
      holdersFirstName: this.holdersFirstName,
      holdersLastName: this.holdersLastName,
      city: this.city,
      province: this.province,
      billingAddress1: this.billingAddress1,
      billingAddress2: this.billingAddress2,
      postalCode: this.postalCode,
      phoneNumber: this.phoneNumber
    });
  }
}
