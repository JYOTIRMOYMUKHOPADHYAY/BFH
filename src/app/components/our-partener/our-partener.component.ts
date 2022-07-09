import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { commonClass } from 'src/app/commonClass/commonClass';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-our-partener',
  templateUrl: './our-partener.component.html',
  styleUrls: ['./our-partener.component.scss']
})
export class OurPartenerComponent implements OnInit {
  LOCAITON_LIST = commonClass.LOCATIONS_NAME;
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  id: any = null;
  submitted = false;
  form: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // window.location.reload();
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phonenumber: [
          '',
          [
            Validators.required
          ]
        ],
        message: ['', Validators.required]
      }
    );


    this.id = setInterval(() => {
      this.divHello.nativeElement.click();
    }, 5000);
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnDestroy() {
    clearInterval(this.id);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.valid)
    if (this.form.valid) {
      let obj = {
        "email": this.form.value.email,
        "message": {
          message: this.form.value.message,
          name: this.form.value.name,
          phonenumber: this.form.value.phonenumber
        }
      }
      this.http.post("https://formspree.io/f/myyoavon", obj).subscribe(data => {
        // console.log(data)
        this.form.reset();
        this.submitted = false;
        Swal.fire({
          title: "Thank you!",
          text: "We will get back to you soon!",
          icon: 'success',
          confirmButtonText: 'Close'
        });

      },
        error => {
          // console.log(error);
          // alert(error.error.error)
          Swal.fire({
            title: error.error.error,
            text: error.error.errors[0].message,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        });
    } else {
      console.log(this.form.valid)
    }

  }

  // showToast() {
  //   const toasts: any[] = Array.from(document.querySelectorAll('.toast'))
  //     .map(toastNode => new Toast(toastNode))

  //   toasts.forEach((item) => {
  //     item.show();
  //   })
  // }
}
