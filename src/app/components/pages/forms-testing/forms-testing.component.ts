import { Component, DoCheck, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, FormRecord, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { forbiddenNameValidator } from 'src/app/directives/forbidden-name.directive';
import { QuestionBase } from 'src/app/services/form/question-base';
import { QuestionControlService } from 'src/app/services/form/question-control.service';
import { QuestionService } from 'src/app/services/form/question.service';
import { AsyncValidatorService } from 'src/app/services/validators/async-validator.service';

const sameNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const firstName = control.get('firstName')?.value
  const lastName = control.get('lastName')?.value;
  if (firstName && lastName) {
    return firstName === lastName ? { sameName: true }: null;
  } else {
    return null;
  }
}

@Component({
  selector: 'app-forms-testing',
  templateUrl: './forms-testing.component.html',
  styleUrls: ['./forms-testing.component.scss'],
  providers: [ 
    QuestionControlService,
    QuestionService 
  ]
})

export class FormsTestingComponent implements DoCheck {
  // questions$: Observable<QuestionBase<any>[]>;
  constructor(
    private fb: FormBuilder,
    private asyncValidator: AsyncValidatorService,
    // dynamic form
    // private qcs: QuestionControlService,
    // service: QuestionService
  ) {
    // this.questions$ = service.getQuestions();
  }

  // dynamic form question
  // @Input() question!: QuestionBase<string>;
  // @Input() dynamicForm!: FormGroup;
  // get isValid() { return this.dynamicForm.controls[this.question.key].valid; }
  
  // dynamic form
  // @Input() questions: QuestionBase<string>[] | null = [];
  // form!: FormGroup;
  // payLoad = '';

  // ngOnInit() {
  //   this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  // }

  // onSubmitDynamic() {
  //   this.payLoad = JSON.stringify(this.form.getRawValue());
  // }


  formJSON!: string;
  // 響應式表單自訂驗證規則
  aControl = new FormControl('a control', [Validators.required, forbiddenNameValidator(/bob/i)])
  
  // from group
  aGroup = new FormGroup({
    noneBob: new FormControl<string>('noneBob', {
      validators: [forbiddenNameValidator(/bob/i)],
      updateOn: 'change'
    }),
    firstName: new FormControl<string>("first name", [Validators.required]),
    lastName: new FormControl("last name"),
    group: new FormGroup({
      a: new FormControl('a'),
      b: new FormControl('b')
    })
  }, { validators: sameNameValidator })

  hero = {
    name: ''
  };

  a = 'template a'
  // form record
  formRecord = new FormRecord<FormControl<string|null>>({});
  formGroupByFormBuilder = this.fb.group({
    firstName: [''],
    lastName: [''],
    group: this.fb.group({
      a: [''],
      b: ['']
    }),
    // form array
    formArr: this.fb.array([
      this.fb.control('')
    ])
  })

  // asyncValidators reactive form module
  asyncValidatorGroup = new FormGroup({
    asyncValidator: new FormControl('async', {
      asyncValidators: [this.asyncValidator.validate.bind(this.asyncValidator)],
      updateOn: 'submit'
    })
  })

  asyncValidatorControl = new FormControl('async', {
    asyncValidators: [this.asyncValidator.validate.bind(this.asyncValidator)],
    updateOn: 'blur'
  })

  noneDuplicateIDTemplate!: number;
  get formArr() {
    return this.formGroupByFormBuilder.get("formArr") as FormArray;
  }

  ngDoCheck(): void {
    this.formJSON = JSON.stringify(this.aGroup.value)
    // console.log("this.formGroupByFormBuilder.errors", this.formGroupByFormBuilder.errors)
    // console.log("this.aControl.errors", this.aControl.errors)
  }

  onSubmit() {
    console.log(this.aGroup.value)
  }

  onAsyncValidatorSubmit() {
    console.log(this.asyncValidatorGroup.errors)
  }

  onFormArraySubmit() {
    console.log(this.formGroupByFormBuilder.value)
  }

  patchForm() {
    this.aGroup.patchValue({
      firstName: "patch name",
      group: {
        a: 'patch A'
      }
    })
  }

  logFormArr() {
    this.formArr.controls.forEach(c => {
      // console.log(c.value)
    })
  }

  setForm() {
    this.aGroup.controls.group.controls.a.setValue("string")
  }

  addFormArr() {
    this.formArr.push(this.fb.control(''))
  }

  resetForm() {
    this.formGroupByFormBuilder.reset()
  }

  addFormRecordControl() {
    this.formRecord.addControl("control", new FormControl("control"))
    this.formRecord.addControl("control2", new FormControl("control"))
    // console.log(this.formRecord.value)
  }

  logAGroupErr() {
    console.log("this.aGroup.errors", this.aGroup.errors)
    console.log("this.aGroup.invalid", this.aGroup.invalid)
  }

  get aGroupNoneBob () {
    return this.aGroup.get("noneBob")
  }
}