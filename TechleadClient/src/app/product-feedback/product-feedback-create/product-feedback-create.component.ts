import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, Form, FormsModule} from '@angular/forms';
import {ProductFeedbackService} from '../../services/product-feedback.service';

@Component({
  selector: 'app-product-feedback-create',
  templateUrl: './product-feedback-create.component.html',
  styleUrls: ['./product-feedback-create.component.scss']
})
export class ProductFeedbackCreateComponent implements OnInit {
  createFeedbackForm: FormGroup;
  rating: FormControl;
  feedbackField: FormControl;
  productSelection: FormControl;

  constructor(private builder: FormBuilder, public feedbackService: ProductFeedbackService) {
    this.rating = new FormControl('', Validators.compose([Validators.required]));
    this.feedbackField = new FormControl('', Validators.compose([Validators.required]));
    this.productSelection = new FormControl('', Validators.compose([Validators.required]));
  }// constructor

  ngOnInit(): void {
    this.createFeedbackForm = this.builder.group({
      rating: this.rating,
      productSelection: this.productSelection,
      feedbackField: this.feedbackField
    });
  }// ngOnInit

  createFeedback() {
    //TODO: Inplement the create feedback method
  }// createFeedback
}// ProductFeedbackCreateComponent
