import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  logInForm!: FormGroup;
  // users: User[] = [];
  public destroy$: Subject<boolean> = new Subject<boolean>();
  // public roles: isAdmin[] = [{ role: 'admin' }, { role: 'customer' }];
  constructor(
    // private authServ: AuthService,
     private router: Router) {}

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      // roles: new FormControl(null, Validators.required),
    });
  }

  public login(): void {
    if (this.logInForm.invalid) {
      return;
    }
    this.logInForm.disable();
    // this.authServ
    //   .login(this.form.value)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //       localStorage.getItem('userRole') == 'customer'
    //         ? this.router.navigate(['/customer-dashboard'])
    //         : this.router.navigate(['/admin-dashboard']);
    //     },
    //     (error) => {
    //       console.warn(error);
    //       this.form.enable();
    //     }
    //   );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
