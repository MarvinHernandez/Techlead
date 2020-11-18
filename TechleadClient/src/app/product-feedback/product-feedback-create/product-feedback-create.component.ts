import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, Form, FormsModule} from '@angular/forms';
import {ProductFeedbackService} from '../../services/product-feedback.service';
import {Subscription} from 'rxjs';

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

  constructor(private builder: FormBuilder, public feedbackService: ProductFeedbackService) {
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
  }// ngOnInit

  // Creates the feedback
  createFeedback(): void {
    //TODO: Inplement the create feedback method
  }// createFeedback

  // When the product type is changed
  onChangeProductType(): void {
    const xSubscription = this.createFeedbackForm.get('productTypeSelection').valueChanges.subscribe(value => {
      console.log(value);
      this.selectedProductType = true;
    });

    this.subscriptions.add(xSubscription);
  }// onChangeProductType

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }// ngOnDestroy
}// ProductFeedbackCreateComponent
