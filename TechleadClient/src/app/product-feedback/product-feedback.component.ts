import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, Form, FormsModule} from '@angular/forms';
import {ProductFeedbackService} from '../../services/product-feedback.service';
import {Subscription} from 'rxjs';
import {Phone} from '../../models/phone';
import {ProductPhoneService} from '../../services/product-phone.service';
import {Laptop} from '../../models/laptop';
import {ProductLaptopService} from '../../services/product-laptop.service';
import {Pc} from '../../models/pc';
import {ProductPcService} from '../../services/product-pc.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-product-feedback-create',
  templateUrl: './product-feedback.component.html',
  styleUrls: ['./product-feedback.component.scss']
})
export class ProductFeedbackComponent implements OnInit, OnDestroy {
  error: string;
  loginStatus: boolean;
  submitted = false;
  loading = false;
  createFeedbackForm: FormGroup;
  rating: FormControl;
  feedbackField: FormControl;
  productSelection: FormControl;
  productTypeSelection: FormControl;
  selectedProductType: boolean;
  subscriptions: Subscription;
  // arrays for the products
  phones: Phone[];
  laptops: Laptop[];
  pcs: Pc[];
  // booleans for the selected product type
  phoneTypeSelected: boolean;
  laptopTypeSelected: boolean;
  pcTypeSelected: boolean;
  constructor(private builder: FormBuilder, private feedbackService: ProductFeedbackService,
              private phoneService: ProductPhoneService, private toastr: ToastrService, private router: Router,
              private appcontext: AuthenticationService, private laptopService: ProductLaptopService,
              private pcService: ProductPcService) {
    this.rating = new FormControl('');
    this.feedbackField = new FormControl('', Validators.compose([Validators.required]));
    this.productSelection = new FormControl('', Validators.compose([Validators.required]));
    this.productTypeSelection = new FormControl('', Validators.compose([Validators.required]));
  }// constructor

  ngOnInit(): void {
    this.createFeedbackForm = this.builder.group({
      rating: this.rating,
      productSelection: this.productSelection,
      feedbackField: this.feedbackField,
      productTypeSelection: this.productTypeSelection
    });
    this.selectedProductType = false;
    this.subscriptions = new Subscription();

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }

    // TODO: MAKE SURE THE PROPERTIES CAN BE ACCESSED PROPERLY FOR EACH TYPE
    // Get the phones from the server
    this.phoneService.getAll().subscribe(phones => {
        this.phones = phones;
    });
    // Get the laptops from the server
    this.laptopService.getAll().subscribe(laptops => {
      this.laptops = laptops;
    });
    // Get the pcs from the server
    this.pcService.getAll().subscribe(pcs => {
      this.pcs = pcs;
    });
  }// ngOnInit

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.createFeedbackForm.controls; }

  // Creates the feedback
  createFeedback(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createFeedbackForm.invalid) {
      return;
    }

    this.loading = true;
    this.toastr.success("Button works");
    // TODO: Implement the create feedback method
  }// createFeedback

  // When the product type is changed
  onChangeProductType(): void {
    const xSubscription = this.createFeedbackForm.get('productTypeSelection').valueChanges.subscribe(value => {
      this.selectedProductType = true;

      // checks which type was selected
      switch (value){
        case 'phone': {
          this.phoneTypeSelected = true;
          this.laptopTypeSelected = false;
          this.pcTypeSelected = false;
          break;
        }
        case 'pc': {
          this.phoneTypeSelected = false;
          this.laptopTypeSelected = false;
          this.pcTypeSelected = true;
          break;
        }
        case 'laptop': {
          this.phoneTypeSelected = false;
          this.laptopTypeSelected = true;
          this.pcTypeSelected = false;
          break;
        }
      }
    });

    this.subscriptions.add(xSubscription);
  }// onChangeProductType

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }// ngOnDestroy
}// ProductFeedbackComponent
