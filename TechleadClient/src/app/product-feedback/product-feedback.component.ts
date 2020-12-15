import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductFeedbackService} from '../services/product-feedback.service';
import {Subscription} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {ProductFeedback} from '../models/productFeedback';

@Component({
  selector: 'app-product-feedback',
  templateUrl: './product-feedback.component.html',
  styleUrls: ['./product-feedback.component.scss']
})
export class ProductFeedbackComponent implements OnInit, OnDestroy {
  error: string;
  showFeedbackTable: boolean;
  showNoFeedback: boolean;
  loginStatus: boolean;
  submitted = false;
  loading = false;
  createFeedbackForm: FormGroup;
  rating: FormControl;
  feedbackField: FormControl;
  selectedProductType: boolean;
  subscriptions: Subscription;
  selectedProductFeedbacks: ProductFeedback[];

  constructor(private builder: FormBuilder, private feedbackService: ProductFeedbackService,
              private toastr: ToastrService, private router: Router, private appcontext: AuthenticationService) {
    this.rating = new FormControl('');
    this.feedbackField = new FormControl('', Validators.compose([Validators.required]));
  }// constructor

  ngOnInit(): void {
    this.createFeedbackForm = this.builder.group({
      rating: this.rating,
      feedbackField: this.feedbackField,
    });
    this.selectedProductType = false;
    this.subscriptions = new Subscription();

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }
    this.loadFeedbackForProduct();
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

    // TODO: Remove hardcoded product id and use the inputted product id
    const loggedInMemberName = this.appcontext.currentUserValue.username;
    const feedback: ProductFeedback = {id: '', memberName: loggedInMemberName, productId: '5f889ac8c8d4cc8c0d305b00',
      text: this.feedbackField.value, rating: this.rating.value};

    this.feedbackService.addProductFeedback(feedback).subscribe( payload => {
        if (payload > 0) {
          this.toastr.success('Feedback submitted. Thank you!');
          this.loading = false;
          this.submitted = false;
          this.createFeedbackForm.reset({
            rating: 0,
            feedbackField: null,
          });
          this.loadFeedbackForProduct();
        } else {
          this.toastr.error('Unable to submit the feedback');
        }
      });
  }// createFeedback

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }// ngOnDestroy

  // loads the feedback for this product
  loadFeedbackForProduct(): void {
    // TODO: Remove hardcoded product id and replace it with the inputted product's id
    this.feedbackService.getByProductId('5f889ac8c8d4cc8c0d305b00').subscribe(feedbacks => {
      if (feedbacks){
        this.selectedProductFeedbacks = feedbacks;
        if (feedbacks.length > 0){
          this.showFeedbackTable = true;
          this.showNoFeedback = false;
        }
        else{
          this.showNoFeedback = true;
          this.showFeedbackTable = false;
        }
      }
      else{
        this.selectedProductFeedbacks = [];
      }
    });
  }// loadFeedbackForProduct
}// ProductFeedbackCreateComponent
