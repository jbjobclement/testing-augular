import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Directive({
  selector: '[appAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncValidatorDirective),
      multi: true
    }
  ]
})
export class AsyncValidatorDirective implements AsyncValidator{
  constructor(
    private userService: UserService
  ) { }
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const a = control.value
    // console.log("AsyncValidatorDirective: a", a)
    return this.userService.getUsers()
    .pipe(
      map(uD => uD.find(u => u.id === Number(a)) ? {
        asyncValidation: true
      }: null),
      catchError(() => of(null))
    ) 
  }
}