import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map, catchError, of } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService implements AsyncValidator {

  constructor(
    private userService: UserService,
  ) { }

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const a = control.value
    // console.log("a", a)
    return this.userService.getUsers()
    .pipe(
      map(uD => uD.find(u => u.id === Number(a)) ? {
        asyncValidation: true
      }: null),
      catchError(() => of(null))
    )
  }
}