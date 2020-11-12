import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/service/web.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public validatorFormStatus: boolean;

  get validatorForm() { return this.formLogin.controls; }

  constructor(private router: Router, private webService: WebService, private formBuilder: FormBuilder, private toastrService: ToastrService, private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.inicializator();
  }

  inicializator() {
    // document.body.classList.add('body-login');
    this.validatorFormStatus = false;
    this.inicializatorForm();
  }

  inicializatorForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formLogin.invalid) {
      return;
    }
    this.spinnerService.show();
    this.saveForm();
  }

  saveForm() {
    this.webService.postLogin(this.formLogin.value).subscribe(
      response => {
        sessionStorage.setItem('_token', JSON.stringify(response.data));
        this.router.navigate(['/dashboard/home']);
        this.spinnerService.hide();
      },
      error => {
        this.mmsToastrService(error.errors, '!Error¡', 'error');
        this.spinnerService.hide();
      }
    );
  }

  mmsToastrService(mms: any, title: any, status: any) {
    if(status == 'warning') {
        this.toastrService.warning(mms, title, { closeButton: true, progressBar: true, timeOut: 8000 })
    }
    if(status == 'success') {
        this.toastrService.success(mms, title, { closeButton: true, progressBar: true })
    }
    if(status == 'error') {
        this.toastrService.error(mms, title, { closeButton: true, progressBar: true })
    }
    if(status == 'info') {
        this.toastrService.info(mms, title, { closeButton: true, progressBar: true })
    }
  }

}
