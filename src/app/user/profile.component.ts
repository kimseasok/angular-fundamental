import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toast.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }

      .error input {
        background-color: #e3c3c6;
      }

      .error :: -webkit-input-placeholder {
        color: #999;
      }

      .error :: -moz-placeholder {
        color: #999;
      }
      .error: -moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private roastr: Toastr
  ) {}

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  ngOnInit() {
    this.firstName = new FormControl(
      this.auth.currentUser.firstName,
      Validators.required
    );
    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.roastr.success('Profile Saved');
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
