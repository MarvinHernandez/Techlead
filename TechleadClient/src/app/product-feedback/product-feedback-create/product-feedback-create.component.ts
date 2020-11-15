import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProductFeedbackService} from '../../services/product-feedback.service';

@Component({
  selector: 'app-product-feedback-create',
  templateUrl: './product-feedback-create.component.html',
  styleUrls: ['./product-feedback-create.component.scss']
})
export class ProductFeedbackCreateComponent implements OnInit {
  createFeedbackForm: FormGroup;
  rating: FormControl;

  constructor(private builder: FormBuilder, public feedbackService: ProductFeedbackService) {
    this.rating = new FormControl('', Validators.compose([Validators.required]));
  }

  ngOnInit(): void {
    this.createFeedbackForm = this.builder.group({
      rating: this.rating
    });
  }
}
