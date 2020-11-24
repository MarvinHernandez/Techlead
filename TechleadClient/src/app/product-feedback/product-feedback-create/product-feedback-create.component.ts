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

@Component({
  selector: 'app-product-feedback-create',
  templateUrl: './product-feedback-create.component.html',
  styleUrls: ['./product-feedback-create.component.scss']
})
export class ProductFeedbackCreateComponent implements OnInit, OnDestroy {
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
  constructor(private builder: FormBuilder, private feedbackService: ProductFeedbackService, private phoneService: ProductPhoneService,
              private laptopService: ProductLaptopService, private pcService: ProductPcService) {
    this.rating = new FormControl('', Validators.compose([Validators.required]));
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

  // Creates the feedback
  createFeedback(): void {
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
}// ProductFeedbackCreateComponent
