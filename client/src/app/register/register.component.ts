import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        this.cancel();
      },
      error: (error) => {
        console.log(error.error);
        console.log(error.error.errors.hasOwnProperty('Password'));
        if (error.error.errors.Password[0]) {
          this.toastr.error(error.error.errors.Password[0]);
        }
        if (error.error.errors.Username[0]) {
          this.toastr.error(error.error.errors.Username[0]);
        }
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
