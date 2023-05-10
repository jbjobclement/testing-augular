import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/services/form/question-base';
import { QuestionService } from 'src/app/services/form/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers:  [QuestionService]
})
export class DynamicFormComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
