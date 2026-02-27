import { Routes } from '@angular/router';
import { First } from './first/first.component';
import { CvComponent } from './cv/cv-component/cv-component.component';
import { Todo } from './todo/model/todo';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Color } from './components/color/color.component';
import { TodoComponent } from './todo/todo/todo.component';
import { Second } from './components/second/second.component';

export const routes: Routes = [
  //cv
  { path: '', component: First },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: Color },
  { path: ':monParam', component: Second },
];
